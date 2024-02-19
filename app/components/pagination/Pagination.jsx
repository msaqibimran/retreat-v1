import React from 'react';
import ReactPaginate from 'react-paginate';
import { images } from '~/config/images';

function PaginatedItems({itemsPerPage}) {
  return (
    <>
      <ReactPaginate
        nextLabel={
          <div className="flex justify-center items-center border rounded-full h-[64px] w-[64px]">
            <img className="" src={images.rightArrow} />
          </div>
        }
        pageCount={1}
        breakLabel="...."
        previousLabel={
          <div className="flex justify-center items-center border rounded-full h-[64px] w-[64px]">
            <img className="" src={images.leftArrow} />
          </div>
        }
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        activeClassName="active rounded-full text-white bg-c_ED1651 font-general_sans_medium"
        pageClassName="border w-[64px] h-[64px]  py-1 text-f_14 font-proxima_regular rounded-full flex items-center justify-center font-general_sans_medium"
        forcePage={0}
        breakClassName="page-item"
        nextLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextClassName="page-item next-item"
        previousClassName="page-item prev-item"
        containerClassName="pagination
      react-paginate items-center bg-transparent text-c_3C3C43D9 text-f_14
      font-proxima_semiBold w-fit mx-auto flex justify-end items-end gap-x-[9px]
      pb-[33px] rounded-md py-2 px-3"
        onPageChange={() => {}}
      />
    </>
  );
}

export default PaginatedItems;
