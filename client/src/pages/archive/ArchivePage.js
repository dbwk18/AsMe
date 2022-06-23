import {React, useState} from 'react';
import { Stack, Grid, Container } from '@mui/material';
import ArticleBox from './ArticleBox';
import './ArchivePage.css'


function ArchivePage() {


    const [category, setCategory] = useState(null);
    
    return (
        <Stack height="100vh" alignItems="center" justifyContent="center" >
            <div className="navigate-tags">
                <button className="archive-tag"onClick={()=>{setCategory(1);}}>전체보기</button>
                <button className="archive-tag" onClick={()=>{setCategory(2);}}>에세이</button>
                <button className="archive-tag" onClick={()=>{setCategory(3);}}>끄적끄적</button>
                <button className="archive-tag" onClick={()=>{setCategory(4);}}>일기</button>

                <input className="archive-search" />
            </div>
            
            <div className="grid-container">
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox />
                <ArticleBox />

            </div>
           
            
        </Stack>
    )
}

export default ArchivePage;
