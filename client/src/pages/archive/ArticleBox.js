import {React, useState} from 'react';
import { Stack, Grid, Container } from '@mui/material';
import './ArticleBox.css'


function ArticleBox({date, title, content, img}) {

   
    return (
        <div className="article-box">
            <div className="article-date">{date}</div>
            <div className="article-grid">
                <div className="article-main">
                    <div className="article-title">{title}</div>
                    <div className="article-content">{content}</div>
                </div>
                <div className="article-img">{img}</div>
            </div>
        </div>
    )
}

export default ArticleBox;
