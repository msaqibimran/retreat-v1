import {Await, NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {useRootLoaderData} from '~/root';
import Button from './Button';
import {strings} from '~/locales/string';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  return (
    <header className="header 2xl:px-40 xl:px-28 lg:px-20 md:px-10 px-5 2xl:mt-8 flex justify-between items-center flex-row">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <Image
          src={shop.brand.logo.image.url}
          alt={shop.name}
          className="w-12 h-12 lg:w-auto lg:h-auto xl:w-12 xl:h-12 2xl:w-16 2xl:h-16"
        />
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 * }}
 */
export function HeaderMenu({menu, primaryDomainUrl, viewport}) {
  const {publicStoreDomain} = useRootLoaderData();
  const className = `header-menu-${viewport} ${
    viewport === 'desktop'
      ? 'border-[0.5px] rounded-[20px] !p-1 !gap-1 bg-c_d8d8d838 border-c_BDBDBD flex'
      : ''
  } !hidden lg:!flex`;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className={className} role="navigation">
      {(menu || FALLBACK_HEADER_MENU).items.map((item, index) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        console.log('url', url);
        return (
          <NavLink
            className={`header-menu-item ${
              index === 0
                ? 'rounded-tl-2xl rounded-bl-2xl'
                : index === menu.items.length - 1
                ? 'rounded-tr-2xl rounded-br-2xl'
                : ''
            } bg-white py-1 px-4 flex items-center text-center h-[46px]`}
            end
            key={item.id}
            onClick={closeAside}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <Button
        chidlren={
          <>
            <span>{strings.shopHeaderBtn}</span>
          </>
        }
        className={
          'bg-c_ED1651 text-white px-12 py-3 rounded-full whitespace-nowrap hidden md:flex'
        }
      />
      <CartToggle cart={cart} />
      <HeaderMenuMobileToggle />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a
      className="lg:hidden flex no-underline hover:no-underline"
      href="#mobile-menu-aside"
    >
      <Image src="https://cdn.shopify.com/s/files/1/0853/3341/0089/files/menu-icon.svg?v=1706888158" />
    </a>
  );
}

function SearchToggle() {
  return <a href="#search-aside">Search</a>;
}

/**
 * @param {{count: number}}
 */
function CartBadge({count}) {
  return (
    <a href="#cart-aside" className="relative">
      <Image
        src={
          'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/cart-icon.svg?v=1706887459'
        }
        className="!w-7 h-7 cursor-pointer"
      />
      {count ? (
        <span className="absolute w-4 h-4 bg-c_ED1651 top-0 -right-1 text-center items-center self-center flex justify-center text-white text-[10px] rounded-full">
          {count}
        </span>
      ) : null}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/248682971433',
  items: [
    {
      id: 'gid://shopify/MenuItem/584669233449',
      resourceId: null,
      tags: [],
      title: 'Home',
      type: '"FRONTPAGE"',
      url: 'https://4439f9-3.myshopify.com/',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/584669266217',
      resourceId: null,
      tags: [],
      title: 'Shop',
      type: 'CATALOG',
      url: 'https://4439f9-3.myshopify.com/collections/all',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/584669298985',
      resourceId: null,
      tags: [],
      title: 'Rētreat iQ',
      type: 'PAGE',
      url: 'https://4439f9-3.myshopify.com/pages/retreat-iq',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/585532539177',
      resourceId: null,
      tags: [],
      title: 'Blogs',
      type: 'BLOG',
      url: 'https://4439f9-3.myshopify.com/blogs/news',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/585532571945',
      resourceId: null,
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: 'https://4439f9-3.myshopify.com/pages/about',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/585532604713',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'FAQ',
      type: 'PAGE',
      url: 'https://4439f9-3.myshopify.com/pages/faq',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isActive ? '#ED1651' : 'black',
    textDecoration: 'none',
  };
}

/** @typedef {Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>} HeaderProps */
/** @typedef {'desktop' | 'mobile'} Viewport */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('./Layout').LayoutProps} LayoutProps */
