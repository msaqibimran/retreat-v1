import {NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {strings} from '~/locales/string';
import {useRootLoaderData} from '~/root';
import Button from './Button';

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({menu, shop}) {
  return (
    <footer className="footer">
      <div className="flex flex-col xl:flex-row justify-between px-5 py-8 sm:px-10 xl:px-20 sm:py-14 xl:py-28">
        <div className="flex flex-col items-start justify-between self-start">
          <Image
            src={
              'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/retreat-icon-white.svg?v=1706889963'
            }
            alt={shop.name}
            className="w-[120px] h-[120px]"
          />
          <span className="hidden xl:block text-white mt-16">
            @{new Date().getFullYear()} {strings.retreatKR}
          </span>
        </div>
        <div className="flex flex-col xl:flex-row xl:grid-col-12 gap-x-16 mt-10 xl:mt-0">
          <div className="col-span-6 flex flex-col sm:flex-row gap-x-12 xl:gap-x-0 xl:flex-col">
            {['Home', 'About', 'Rētreat IQ', 'Testimonials', 'FAQ'].map(
              (item) => {
                return <span className="text-white mb-4">{item}</span>;
              },
            )}
          </div>
          <div className="col-span-6 flex flex-col mt-10 xl:mt-0 mb-10 xl:mb-0">
            {['Contact', 'info@Rētreatkr.com'].map((item) => {
              return <span className="text-white mb-2 xl:mb-4">{item}</span>;
            })}
          </div>
        </div>
        <div className="hidden xl:flex flex-col justify-between">
          <div className="flex grid-col-12 gap-x-8">
            <div className="col-span-6 flex flex-col">
              <Button
                chidlren={
                  <>
                    <span>{strings.shopHeaderBtn}</span>
                  </>
                }
                className={
                  'bg-white text-c_ED1651 px-16 py-4 rounded-full whitespace-nowrap hidden md:flex'
                }
              />
            </div>
            <div className="col-span-6 flex flex-col">
              <Button
                chidlren={
                  <>
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0853/3341/0089/files/top.png?v=1707304837"
                      alt="top-icon"
                      className="!w-[58px]"
                    />
                  </>
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-white">{strings.privacy}</span>
            <span className="text-white ml-10">{strings.cookies}</span>
          </div>
        </div>
        <div className="xl:hidden grid grid-cols-12 gap-x-2 items-center">
          <div className="col-span-10 sm:col-span-11 flex flex-col">
            <Button
              chidlren={
                <>
                  <span>{strings.shopHeaderBtn}</span>
                </>
              }
              className={
                'bg-white text-c_ED1651 px-16 py-4 rounded-full whitespace-nowrap justify-center'
              }
            />
          </div>
          <div className="col-span-2 sm:col-span-1 items-end flex justify-end">
            <Button
              chidlren={
                <>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0853/3341/0089/files/top.png?v=1707304837"
                    alt="top-icon"
                    className="!w-[58px]"
                  />
                </>
              }
            />
          </div>
        </div>
        <div className="xl:hidden flex flex-row justify-between items-center mt-10">
          <div>
            <span className="block text-white">
              @{new Date().getFullYear()} {strings.retreatKR}
            </span>
          </div>
          <div>
            <span className="text-white">{strings.privacy}</span>
            <span className="text-white ml-10">{strings.cookies}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu({menu, primaryDomainUrl}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
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

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
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
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
