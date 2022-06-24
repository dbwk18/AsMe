import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Grid, Container } from '@mui/material';
import ArticleBox from './ArticleBox';
import BackBtn from '../../assets/images/backBtn.png'
import axios from 'axios';

import './ArchivePage.css'


function ArchivePage() {

    const [category, setCategory] = useState(1);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let dataToSubmit = {
            "user_id": window.localStorage.getItem("user_id")
        }
    
        axios.get(`/api/posts`, dataToSubmit)
        .then(response => response.data)
        .then(response => {
            console.log(response);
            
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <Stack height="100vh" alignItems="center" justifyContent="center" sx={{ transform: "scale(0.75)" }}>
            <div><input className="archive-search" placeholder='글감을 검색하세요' /></div>
            <div className='navigate-btn'><Link to="/"><img width="50px" src={BackBtn} /></Link></div>
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
                    title="우주" 
                    content="
                    마음과 반대로 아픈 말이 나와 너를 힘들게 했던 
                    나도 내가 힘든 걸. 다짐과 다르게 나아진 게 없어
                    늘 실망하게 했던 나도 ... " 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="12시" 
                    content="당신 오늘 충분히 우울할 수 있는 날이었다.
                    말 몇마디가, 아니면 누군가의 행동이, 또는 노력에 비해 
                    잘 나오지 않는 결과들이 ..." 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="우정" 
                    content="
                    친구는 세월의 도둑이다.봄부터 흐르는 물은 겨울이 
                    되어도 얼지 않듯이마음에서 우러나오는 우적은 역경이 
                    닥친다고 해서 ... " 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="팡파레" 
                    content="코끝을 간지럽히는 살랑 부는 바람이
                    눈 감으면 어디든 네 곁에 데려가 주길
                    어느새 내 맘이 춤을 추네
                    한없이 예쁜 날이야 ..." 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="물고기 " 
                    content="난 땅에서도 숨을 쉴 수 있는
                    물고기였을지도 몰라
                    가끔 내 맘을 이해 못 하는
                    사람들을 만나도 상관없어
                    물속을 헤엄치는 건 ..." 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="친구" 
                    content="오늘은 잊고 지내던
                    친구에게서 전화가 왔네
                    내일이면 멀리 떠나간다고
                    어릴 적 함께 뛰놀던
                    골목길에서 만나자 하네 내일이면 ..." 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="겨울잠" 
                    content="때 이른 봄 몇 송이 꺾어다
                    너의 방 문 앞에 두었어
                    긴 잠 실컷 자고 나오면
                    그때쯤엔 예쁘게 피어 있겠다 별 띄운 여름 ..." 
                />
                <ArticleBox 
                    date="2022-06-22" 
                    title="초록" 
                    content="달아나는 빛 초록을 거머쥐고
                    그 많던 내 모습 기억되리 오월의 하늘은
                    푸르던 날들로 내몰린 젊은 우리는 영원한
                    사랑을 해 본 ..." 
                />

            </div>
           
            
        </Stack>
    )
}

export default ArchivePage;
