/** @format */

import React from 'react';
import ImageCard from './ImageCard';

export default function PanelContent({ data, handleDeleteWishlist, handleDeleteProduct, handleEditProduct }) {
    // console.log(data, '<< di komponen panel')
    return (
        <div className='column is-flex is-flex-wrap-wrap is-justify-content-center'>
            <div
                className='box is-flex is-justify-content-center card is-centered is-flex-wrap-wrap'
                style={{
                    width: 900,
                    height: 450,
                    overflowY: 'auto',
                    boxShadow: '0px 0px 0px',
                }}>
                {data?.map((image, idx) => (
                    <ImageCard
                        key={idx}
                        data={image}
                        handleDeleteWishlist={handleDeleteWishlist}
                        handleEditProduct={handleEditProduct}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ))}
            </div>
        </div>
    );
}
