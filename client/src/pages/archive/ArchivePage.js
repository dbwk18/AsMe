import {React, useState} from 'react';
import { Stack, Grid, Container } from '@mui/material';
import ArticleBox from './ArticleBox';
import BackBtn from '../../assets/images/backBtn.png'

import './ArchivePage.css'


function ArchivePage() {

    
    const [category, setCategory] = useState(1);
    
    return (
        <Stack height="100vh" alignItems="center" justifyContent="center" >
            <div><input className="archive-search" placeholder='글감을 검색하세요' /></div>
            <div className='navigate-btn'><img width="50px" src={BackBtn} /></div>
            <div className="navigate-tags">
                <button className={`archive-tag ${category=='1' ? "on" : ""}`} onClick={()=>{setCategory(1);}}>전체보기</button>
                <button className={`archive-tag ${category=='2' ? "on" : ""}`} onClick={()=>{setCategory(2);}}>일기</button>
                <button className={`archive-tag ${category=='3' ? "on" : ""}`} onClick={()=>{setCategory(3);}}>끄적끄적</button>
                <button className={`archive-tag ${category=='4' ? "on" : ""}`} onClick={()=>{setCategory(4);}}>영감</button>
                <button className={`archive-tag ${category=='5' ? "on" : ""}`} onClick={()=>{setCategory(5);}}>생각정리</button>
                <button className={`archive-tag ${category=='6' ? "on" : ""}`} onClick={()=>{setCategory(6);}}>감상문</button>
            </div>
            
            <div className="grid-container">
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                /><ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                /><ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="나는 어디서 힘을 얻을까?" 
                    content="나는 어디서 힘을 얻을까? 다시 일어난다라는 표현이 꽤나 거창하게 들리기도 한" 
                />

            </div>
           
            
        </Stack>
    )
}

export default ArchivePage;
