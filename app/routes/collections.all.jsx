import { defer } from '@shopify/remix-oxygen';
import { Await, useLoaderData, Link } from '@remix-run/react';
import { Fragment, Suspense, useState } from 'react';
import { Image, Money } from '@shopify/hydrogen';
import Button from '~/components/Button';
import { Disclosure } from '@headlessui/react'

const QuestionArray = [
  {
  question: 'Question 1',
  answer: 'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  '
},
{
  question: 'Question 2',
  answer: 'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  '
},
{
  question: 'Question 3',
  answer: 'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  '
},
{
  question: 'Question 4',
  answer: 'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  '
},
{
  question: 'Question 5',
  answer: 'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  '
},
{
  question: 'Question 6',
  answer: 'Lorem ipsum dolor sit amet consectetur. Cras volutpat ut placerat vulputate. Semper semper tellus lectus blandit faucibus rhoncus. Etiam id lectus aliquam vitae quis.  '
}
]


/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Hydrogen | Home' }];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ context }) {
  const { storefront } = context;
  const { collections } = await storefront.query(FEATURED_COLLECTION_QUERY);
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
      <FrequentlyAskedQuestions />
      <SectionSix />
      <SectionSeven />
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function SectionThree({ sectionThree }) {
  return (
    <div className="lg:grid grid-cols-12 gap-5 mt-10">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={sectionThree}>
          {({ metaobject }) => (
            <Fragment>
              <div className="col-span-6 self-center">
                <span className="font-size">
                  {metaobject?.fields[1]?.value}
                </span>
                <Button
                  chidlren={
                    <div className='flex'>
                      <span>About Us</span>
                    </div>
                  }
                  className={
                    'self-start mt-10 bg-transparent border border-black shadow-[0_6px_8px_0_rgba(0, 0, 0, 0.05)] text-black px-10 py-2 rounded-full flex flex-row justify-between'
                  }
                />
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

const SectionFour = ({ sectionFour }) => {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-12 mt-20">
      <Suspense fallback={<div>...Loading</div>}>
        <Await resolve={sectionFour}>
          {({ metaobject }) => (
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
                <h1 className="mt-4 text-white text-2xl lg:text-4xl xl:text-6xl font-bold">
                  {metaobject?.fields[1]?.value}
                </h1>
                <p className="text-white text-lg xl:text-3xl mt-4">
                  {metaobject?.fields[4]?.value}
                </p>
                <p className="text-white text-base xl:text-lg mt-4">
                  {metaobject?.fields[0]?.value}
                </p>
                <Button
                  chidlren={
                    <>
                      <span>Learn Rētreat IQ</span>
                    </>
                  }
                  className={
                    'self-start mt-10 bg-c_ED1651 border-white border text-white px-10 py-2 rounded-full flex flex-row justify-between'
                  }
                />
              </div>
            </Fragment>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const SectionFive = ({ reviewOne, reviewTwo, reviewThree, reviewFour }) => {
  return (
    <div className="flex flex-col lg:grid grid-cols-12 mt-20 gap-x-8">
      <Fragment>
        <div className="col-span-3 flex flex-col justify-between">
          <span className="text-[40px] text-c_ED1651  font-semibold">
            What our customers <span className="text-c_333333">have to</span>{' '}
            say.
          </span>
          <span className="text-sm text-c_333333 hidden lg:block">
            *Compensated to evaluate our products.
          </span>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-12 gap-x-4">
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewOne}>
                {({ metaobject }) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewTwo}>
                {({ metaobject }) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewThree}>
                {({ metaobject }) => (
                  <div className="col-span-3 relative">
                    <Image data={metaobject?.fields[0]?.reference?.image} />
                  </div>
                )}
              </Await>
            </Suspense>
            <Suspense fallback={<div>...Loading</div>}>
              <Await resolve={reviewFour}>
                {({ metaobject }) => (
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

const FrequentlyAskedQuestions = ({}) => {
  return (
    <div className='flex flex-col py-16 lg:px-8'>
      <div className='flex gap-1 items-center sm:flex flex-wrap'>
      <span className='text-[32px] sm:text-base md:text-[52px] text-[#343434]'>Frequently</span>
      <span className='text-[32px] sm:text-base md:text-[52px] text-[#ED1651]'>asked</span>
      <span className='text-[32px] sm:text-base md:text-[52px] text-[#ED1651]'>questions</span>
      </div>
      <div className="w-full pt-8">
      <div className="w-full rounded-2xl bg-white">
        {QuestionArray?.map((item,index) => {
          return (

        <Disclosure defaultOpen={index === 0}>
          {({ open }) => (
            <>
              <Disclosure.Button  className="flex w-full justify-between rounded-lg  py-2 text-left text-sm font-medium">
                <span className={open ? 'w-full text-[24px] text-[#ED1651] pb-8 py-4' : 'w-full text-[24px] text-[#222329] pb-8 py-4'}>{item?.question}</span>
                {open ? 
                <div className='flex justify-end'>
                <Image src='https://cdn.shopify.com/s/files/1/0853/3341/0089/files/xmark.svg?v=1707854021'
                className='h-[29.94px] w-[29.94px] float-end'
                />   
                </div>
                  : 
                  <div className='flex justify-end'>
                  <Image src='https://cdn.shopify.com/s/files/1/0853/3341/0089/files/plus.svg?v=1707854784' className='h-[29.94px] w-[29.94px] float-end'/>
                  </div>
                  }
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-500  border-black border-b pb-4">
                {item?.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          )
        })}
      
      </div>
    </div>
    </div>
  )
}

const SectionSix = () => {
  return (
    <div className="flex flex-col mt-20 gap-x-8">
      <Fragment>
        <div className='flex items-center min-h-[1149.67px] bg-[url("https://cdn.shopify.com/s/files/1/0853/3341/0089/files/green_mountains.png?v=1707843126")] bg-cover bg-no-repeat bg-center rounded-[34px] text-white p-5'>
          <div className='grid lg:grid-cols-2 gap-5'>
            <div>
              <div>
                <span className='text-[30px] '>마일드한 성분, 최적의 효과</span>
              </div>
              <div>
                <span className='text-[72px] font-bold uppercase'>Mild ingredients,<br /> bold results.</span>
              </div>
              <div>
                <span>We choose naturally-derived ingredients that are gentle on your skin while still proving their effectiveness. Our formulations prioritize the necessary components, leaving out any unnecessary additives.</span>
              </div>
              <div className='flex sm:flex-row flex-col flex-wrap space-x-5'>
                <Button
                  chidlren={
                    <span className='space-x-4 w-full flex justify-between'>
                      <span>Shop</span>
                      <span>가게</span>
                    </span>
                  }
                  className={
                    'self-start mt-10 bg-c_ED1651  text-white px-5 py-2 rounded-full flex flex-row justify-between w-[220px]'
                  }
                />
                <Button
                  chidlren={
                    <span className='space-x-4 w-full flex justify-between'>
                      <span>About</span>
                      <span>가게</span>
                    </span>
                  }
                  className={
                    'self-start mt-10  border-white border text-white px-5 py-2 rounded-full flex flex-row justify-between w-[220px]'
                  }
                />
              </div>
            </div>
            <div className='text-[40px] flex justify-end items-center w-full'>
              <div className='space-y-10'>
                {Array.from({ length: 4 })?.map(() => (
                  <div className='flex justify-end space-x-3 flex-wrap '>
                    <div>
                      <span>임상 테스트 완료</span>
                    </div>
                    <div>
                      <span>Clinically tested</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

const bluePrintsData = [{
  id: "1",
  krLabel: "세정",
  engLabel: "Cleanse",
  description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
  image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
  collapse: true,
}, {
  id: "2",
  krLabel: "영양",
  engLabel: "Nourish",
  description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
  image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
  collapse: false,
}, {
  id: "3",
  krLabel: "세정",
  engLabel: "Soothe",
  description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
  image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
  collapse: false,
}, {
  id: "4",
  krLabel: "보호",
  engLabel: "Protect",
  description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
  image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
  collapse: false,
}, {
  id: "5",
  krLabel: "광채",
  engLabel: "Glow",
  description: "We choose naturally-derived ingredients that are gentle on your skin while still proving their",
  image: "https://cdn.shopify.com/s/files/1/0853/3341/0089/files/Cleanse.png?v=1707854993",
  collapse: false,
}]
const SectionSeven = () => {
  const [bluePrints, setBluePrints] = useState(bluePrintsData)
  const handleCollapse = (id) => setBluePrints((prev) => prev?.map((item) => item?.id === id ? ({ ...item, collapse: true }) : ({ ...item, collapse: false })))
  return (
    <div className="flex flex-col mt-20 gap-x-8">
      <div className='grid lg:grid-cols-2 gap-5'>
        <div>
          <div>
            <span className='text-c_333333 xl:text-[72px] sm:text-[48px] text-[32px] font-medium  sm:leading-[90.72px] leading-[60.48px]'>Rētreat Kr’s,<br /> Korean Beauty</span>
          </div>
          <div>
            <span className='text-c_7CA0CC xl:text-[72px] sm:text-[48px] text-[32px] font-medium  sm:leading-[90.72px] leading-[60.48px]'>Blueprint</span>
          </div>
          <Button
            chidlren={
              <span className='space-x-4 w-full flex justify-between'>
                <span>Shop</span>
                <span>가게</span>
              </span>
            }
            className={
              'self-start mt-10 border border-black text-c_222329 px-5 py-2 rounded-full flex flex-row justify-between w-[220px]'
            }
          />
        </div>
        <div className='space-y-5 '>
          {bluePrints?.map((bluePrint) => (
            <div className='flex space-x-10 cursor-pointer' onClick={() => handleCollapse(bluePrint?.id)}>
              <div className={`min-h-full w-[12px] rounded-full ${bluePrint?.collapse ? "bg-c_ED1651" : "bg-c_FBD0DC"}`}></div>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <div className={` ${bluePrint?.collapse ? "" : "flex space-x-5 items-center"}`}>
                    <div>
                      <span className='xl:text-[40px] sm:text-[30px] text-[20px]'>{bluePrint?.krLabel}</span>
                    </div>
                    <div>
                      <span className='sm:text-[30px] text-[20px]'>{bluePrint?.engLabel}</span>
                    </div>
                  </div>
                  {bluePrint?.collapse && (
                    <div>
                      <Image className='h-[90.21px]' src={bluePrint?.image} />
                    </div>
                  )}
                </div>
                {bluePrint?.collapse && (
                  <div>
                    <span className='sm:text-[24px] text-[12px]'>{bluePrint?.description}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
// function RecommendedProducts({products}) {
//   return (
//     <div className="recommended-products">
//       <h2>Recommended Products</h2>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Await resolve={products}>
//           {({products}) => (
//             <div className="recommended-products-grid">
//               {products.nodes.map((product) => (
//                 <Link
//                   key={product.id}
//                   className="recommended-product"
//                   to={`/products/${product.handle}`}
//                 >
//                   <Image
//                     data={product.images.nodes[0]}
//                     aspectRatio="1/1"
//                     sizes="(min-width: 45em) 20vw, 50vw"
//                   />
//                   <h4>{product.title}</h4>
//                   <small>
//                     <Money data={product.priceRange.minVariantPrice} />
//                   </small>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </Await>
//       </Suspense>
//       <br />
//     </div>
//   );
// }

function HeroBanner({ heroBanner }) {
  return (
    <div className="mt-10 lg:mt-20">
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
                  sizes="100vw"
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

const FeaturedProductsSection = ({ featuredProducts }) => {
  return (
    <div className="lg:grid grid-cols-12 gap-5 mt-10 lg:items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={featuredProducts}>
          {(item) => {
            const fields = item?.metaobject?.fields;
            return (
              <Fragment>
                <div className="col-span-5 flex flex-col">
                  <span className="text-lg 2xl:text-2xl">
                    {fields[3]?.value}
                  </span>
                  <span className="text-lg 2xl:text-[26px] mt-6">
                    {fields[0]?.value}
                  </span>
                  <span className="text-xl 2xl:text-[32px] font-medium text-c_ED1651">
                    {fields[2]?.value}
                  </span>
                  <Button
                    chidlren={
                      <>
                        <span>Shop</span>
                      </>
                    }
                    className={
                      'self-start mt-10 bg-c_ED1651 text-white px-10 py-2 rounded-full flex flex-row justify-between'
                    }
                  />
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
                              sizes="(min-width: 45em) 20vw, 50vw"
                            />
                            <div className="p-6">
                              <div className="flex flex-row mb-3 items-center justify-between">
                                <Money
                                  data={product?.priceRange?.maxVariantPrice}
                                />
                                <Image
                                  src={
                                    'https://cdn.shopify.com/s/files/1/0853/3341/0089/files/unfavorite-icon.svg?v=1707311326'
                                  }
                                  width={16}
                                  height={16}
                                />
                              </div>
                              <h4>{product?.title}</h4>
                              <small>{product.description}</small>
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
