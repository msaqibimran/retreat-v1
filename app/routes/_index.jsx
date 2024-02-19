import { Await, Link, useLoaderData } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';
import { defer } from '@shopify/remix-oxygen';
import { Fragment, Suspense } from 'react';
import Button from '~/components/Button';
import { BluePrints } from '~/components/homeComponents/bluePrints';
import { MildIngredientsBoldResults } from '~/components/homeComponents/mildIngredientsBoldResults';
import RetreatCardSection from '~/components/homeComponents/retreatCardSection';
import FrequentlyAskedQuestions from '~/components/homeComponents/frequentlyAskedQuestions';
import { EmailSubscribeFollowSocial } from '~/components/emailSubscribeFollowSocial';


/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const heroBanner = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'first-slide',
      type: 'slideshow',
    },
  });
  const featuredProductsSection = storefront.query(FEATURED_PRODUCTS, {
    variables: {
      handle: 'second-slide',
      type: 'slideshow',
    },
  });
  const sectionThree = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'home-page-text-with-image-1-tq00i4sv',
      type: 'home_page_text_with_image_1',
    },
  });

  const sectionFour = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'retreat-i-q',
      type: 'image_text_side_by_side',
    },
  });

  const reviewOne = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'nairobi-m',
      type: 'home_page_reviews',
    },
  });

  const reviewTwo = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'nairobi-m-1',
      type: 'home_page_reviews',
    },
  });

  const reviewThree = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'nairobi-m-2',
      type: 'home_page_reviews',
    },
  });

  const reviewFour = storefront.query(META_OBJECTS, {
    variables: {
      handle: 'nairobi-m-3',
      type: 'home_page_reviews',
    },
  });

  return defer({
    featuredCollection,
    recommendedProducts,
    heroBanner,
    featuredProductsSection,
    sectionThree,
    sectionFour,
    reviewOne,
    reviewTwo,
    reviewThree,
    reviewFour,
  });
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      <HeroBanner heroBanner={data.heroBanner} />
      <FeaturedProductsSection
        featuredProducts={data.featuredProductsSection}
      />
      <SectionThree sectionThree={data.sectionThree} />
      <SectionFour sectionFour={data.sectionFour} />
      <SectionFive
        reviewOne={data.reviewOne}
        reviewTwo={data.reviewTwo}
        reviewThree={data.reviewThree}
        reviewFour={data.reviewFour}
      />
      <MildIngredientsBoldResults />
      <BluePrints />
      <FrequentlyAskedQuestions />
      <RetreatCardSection />
      {/* <HomeRetreatSection /> */}
      <EmailSubscribeFollowSocial />
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function SectionThree({sectionThree}) {
  return (
    <div className="lg:grid grid-cols-12 gap-5 mt-20 md:px-12">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={sectionThree}>
          {({metaobject}) => (
            <Fragment>
              <div className="col-span-6 self-center">
                <span className="text-f_40 font-general_sans_medium text-c_343434 leading-[50.4px]">
                  {metaobject?.fields[1]?.value}
                </span>
                <div className='flex sm:flex-row flex-col flex-wrap lg:gap-5 gap-2'>
                                <Button
                                    chidlren={
                                        <div className='w-full text-f_16  font-general_sans_medium flex items-center justify-between'>
                                            <span>About Us</span>
                                            <div className='flex gap-x-2 items-center'>
                                            <span>가게</span>
                                            <img className='h-3 w-3' src='https://cdn.shopify.com/s/files/1/0853/3341/0089/files/forward-arrow.svg?v=1707843033'/>
                                            </div>
                                        </div>
                                    }
                                    className={
                                        'self-start mt-10 bg-transparent border-c_000000 border  text-c_222329 px-5 py-2 rounded-full flex flex-row justify-between items-center lg:w-[317px] min-h-[68px] w-full'
                                    }
                                />
                              
                            </div>
              </div>
              <div className="col-span-6 mt-10 lg:mt-0">
                <Image
                  data={metaobject?.fields[0]?.reference?.image}
                  sizes="100vw"
                />
              </div>
            </Fragment>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

const SectionFour = ({sectionFour}) => {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-12 mt-20 md:px-12">
      <Suspense fallback={<div>...Loading</div>}>
        <Await resolve={sectionFour}>
          {({metaobject}) => (
            <Fragment>
              <div className="col-span-6">
                <Image
                  data={metaobject?.fields[2]?.reference?.image}
                  sizes="100vw"
                  className="rounded-bl-[34px] rounded-br-[34px] lg:rounded-br-[0px] lg:rounded-tl-[34px] lg:rounded-bl-[34px]"
                />
              </div>
              <div className="lg:col-span-6 bg-c_ED1651 rounded-tl-[34px] rounded-tr-[34px] py-16 lg:py-0 lg:rounded-tl-[0px] lg:rounded-tr-[34px] lg:rounded-br-[34px] px-10 justify-center flex flex-col items-start">
                <div className="bg-c_D1DEBB px-4 py-1 justify-center items-center flex rounded-full">
                  <span className="text-c_343434 text-sm">Coming soon</span>
                </div>
                <span className="mt-4 text-white font-sora_semiBold text-f_72">
                  {metaobject?.fields[1]?.value}
                </span>
                <p className="text-white font-general_sans_semiBold text-f_40 mt-4">
                  {metaobject?.fields[4]?.value}
                </p>
                <p className="text-white font-general_sans_semiBold text-f_20 mt-4">
                  {metaobject?.fields[0]?.value}
                </p>
               
                   <div className='flex sm:flex-row flex-col flex-wrap lg:gap-5 gap-2'>
                                <Button
                                    chidlren={
                                        <span className='space-x-4 w-full text-f_16  font-general_sans_medium flex items-center justify-between'>
                                            <span>Learn Rētreat IQ</span>
                                            <span>가게</span>
                                        </span>
                                    }
                                    className={
                                        'self-start mt-10 bg-c_ED1651 border-white border  text-white px-5 py-2 rounded-full flex flex-row justify-between items-center lg:w-[346px] min-h-[68px] w-full'
                                    }
                                />
                              
                            </div>
              </div>
            </Fragment>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const SectionFive = ({reviewOne, reviewTwo, reviewThree, reviewFour}) => {
  return (
    <div className="flex flex-col lg:grid grid-cols-12 mt-20 gap-x-8 md:px-12">
      <Fragment>
        <div className="col-span-3 flex flex-col justify-between">
          <span className=" text-c_ED1651 font-sora_semiBold text-f_40">
            What our customers <span className="font-sora_semiBold text-f_40 text-c_333333">have to</span>{' '}
            say.
          </span>
          <span className="text-f_12 whitespace-nowrap font-general_sans_medium text-c_333333 hidden lg:block">
            *Compensated to evaluate our products.
          </span>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-12 gap-x-4">
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewOne}>
                {({metaobject}) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewTwo}>
                {({metaobject}) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewThree}>
                {({metaobject}) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewFour}>
                {({metaobject}) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
          </div>
        </div>
        <span className="text-sm text-c_333333 block lg:hidden mt-4">
          *Compensated to evaluate our products.
        </span>
      </Fragment>
    </div>
  );
};






/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */


function HeroBanner({heroBanner}) {
  return (
    <div className="mt-10 lg:mt-20 md:px-12">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={heroBanner}>
          {(item) => {
            const bannerImg = item?.metaobject?.fields.find(
              (ele) => ele.key === 'media',
            )?.reference?.image;
            return (
              <div className="flex justify-center items-center">
                <Image
                  src={bannerImg?.url}
                  alt={bannerImg?.altText || 'hero banner'}
                  // sizes="100vw"
                  className='max-w-[1512px]'
                />
              </div>
            );
          }}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FeaturedProductsSection = ({featuredProducts}) => {
  return (
    <div className="lg:grid grid-cols-12 gap-5 mt-10 md:px-12 lg:items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={featuredProducts}>
          {(item) => {
            const fields = item?.metaobject?.fields;
            return (
              <Fragment>
                <div className="col-span-5 flex flex-col">
                  <span className="md:text-f_72 text-f_24 md:leading-[80px] font-semibold font-sora_bold">
                    {fields[3]?.value}
                  </span>
                  <span className="md:text-f_26 text-f_24  text mt-6 font-sora_medium">
                    {fields[0]?.value}
                  </span>
                  <span className=" md:text-f_26 text-f_24   font-sora_medium text-c_ED1651">
                    {fields[2]?.value}
                  </span>
                  <div className='flex sm:flex-row flex-col flex-wrap lg:gap-5 gap-2'>
                                <Button
                                    chidlren={
                                        <span className='space-x-4 w-full text-f_16  font-general_sans_medium flex items-center justify-between'>
                                            <span>Shop</span>
                                            <span>가게</span>
                                        </span>
                                    }
                                    className={
                                        'self-start mt-10 bg-c_ED1651 border-0  text-white px-5 py-2 rounded-full flex flex-row justify-between items-center lg:w-[320px] min-h-[68px] w-full'
                                    }
                                />
                              
                            </div>
                </div>
                <div className="col-span-7">
                  <div className="grid grid-cols-12 gap-4 mt-10">
                    {fields[1]?.references?.nodes?.map((product, index) => {
                      return (
                        <div
                          className="border border-c_b6b6b6 col-span-4 rounded-[24px]"
                          key={`featured-products-${index}`}
                        >
                          <Link
                            key={product.id}
                            className="no-underline hover:no-underline"
                            to={`/products/${product.handle}`}
                          >
                            <Image
                              data={product.images.nodes[0]}
                              // sizes="(min-width: 45em) 20vw, 50vw"
                                  className='max-h-[381.93px] max-w-[437px]'
                                  
                            />
                            <div className="p-6">
                              <div className="flex flex-row mb-3 items-center justify-between">
                                <Money
                                  data={product?.priceRange?.maxVariantPrice}
                                  className='font-general_sans_medium text-f_20 text-c_000000'
                                />
                                <Image
                                  src={
                                    'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/unfavorite-icon.svg?v=1707311326'
                                  }
                                  width={16}
                                  height={16}
                                />
                              </div>
                              <div className='flex flex-col'>
                              <span className='font-sora_bold md:text-f_18 text-f_16 text-c_000000'>{product?.title}</span>
                              <span className='font-general_sans_regular text-f_16 text-c_000000'>{product.description}</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Fragment>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const META_OBJECTS = `#graphql
  query MetaObject($handle: String!, $type: String!) {
    metaobject(handle: {handle: $handle, type: $type}) {
      id
      fields {
        key
        value
        reference {
          ... on MediaImage {
            id
            image {
              altText
              height
              id
              url
              width
            }
          }
        }
      }
    }
  }
`;

const FEATURED_PRODUCTS = `#graphql
  query FeaturedProductsSection($handle: String!, $type: String!) {
    metaobject(handle: {handle: $handle, type: $type}) {
      id
      fields {
        key
        value
        references(first: 10) {
          nodes {
            ... on Product {
              id
              createdAt
              handle
              description
              title
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 10) {
                nodes {
                  url
                  width
                  altText
                  height
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
