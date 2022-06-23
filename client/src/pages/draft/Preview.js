import {React, useState} from 'react';
import CloseBtn from '../../assets/images/closeBtnBlack.png'
import CheckIcon from '../../assets/images/checkIcon.png'


import './Preview.css'


function Preview ( {setToolBtn} ) {

    const [layout, setLayout] = useState('black');

    return(
        <div className='preview-modal'>
            <div className='preview-select'>
                <div className='preview-layout'>
                    <div onClick={()=>{setLayout('black');}} style={{backgroundColor: "#000000"}}>
                        <img width="40px" src={layout == 'black' ? CheckIcon : ""}/>
                    </div>
                    <div onClick={()=>{setLayout('orange');}} style={{backgroundColor: "#F16601"}}>
                        <img width="40px" src={layout == 'orange' ? CheckIcon : ""}/>
                    </div>
                    <div onClick={()=>{setLayout('blue');}} style={{backgroundColor: "#0D1F59"}}>
                        <img width="40px" src={layout == 'blue' ? CheckIcon : ""}/>
                    </div>
                </div>
                <div className='preview-close' onClick={()=>{setToolBtn(null);}}>
                    <img width="30px" src={CloseBtn} /> 
                </div>
            </div>
            <div className={`preview-header ${layout}`}>
                <div className='title'>나는 어디서 힘을 얻을까?</div>
                <div className='subtitle'>나는 어디서 힘을 얻을까는 뭘까</div>
                <div className='date'>2022-06-22</div>
            </div>
            <div className={`preview-body ${layout}`}> 
                <div>
                백과사전(百科事典, 영어: encyclopedia, 라틴어: encyclopædia)은 학문, 기술, 예술 등 자연과 인간의 모든 활동에 관한 다방면의 지식을 수집하여 
                체계적으로 정리하고 항목마다 풀이한 책으로 주로 참고서로서 활용했다. 백과사전의 영어명 ‘encyclopedia’는 그리스어의 ‘ἐγκύκλιος’와 
                ‘παιδεία’의 결합을 어원으로 가지고 있는데, 온갖 종류의 지식을 가르쳐 기른다는 뜻이다. 즉, 백과사전의 원래 목적은 '교육'이었다. 
                한편 백과사전의 또 다른 목적으로는 '참고'가 있다. 현대의 백과사전들은 '교육'과 '참고' 모두를 목적으로 하는 경우가 많다.[1]    
                </div>
                <br />
                <div>
                백과사전에서 내용 분류의 단위이자, 설명의 대상이 되는 것을 '표제어'라고 한다. 표제어의 범위에 따라 백과사전의 종류가 나뉘는데, 
                넓은 범위를 갖는 표제어들로 백과사전을 구성하는 것을 대항목주의라고 하고 상대적으로 좁은 범위의 표제어를 이용하는 것을 
                소항목주의라고 한다. 대항목주의는 하나의 주제에 대해 깊이 있고 포괄적으로 설명하는 방식으로, 교육 목적의 백과사전이 유명한 학자의
                논문을 모아서 엮는 방식을 택하는 것이 대표적인 예이다. 한편 소항목주의를 채택한 백과사전은 표제어별로 간결하고 압축적인 방식으로 
                기술되어 있으며 대항목주의에 비해 다양한 표제어에 대한 정보를  제공하는 장점이 있어서 참고 목적의 백과사전에 많이 쓰인다. 
                </div>
            </div>
            <div className={`preview-footer ${layout}`}>
                <div className='tag'>백과사전</div>
                <div className='tag'>소항목주의</div>
                <div className='tag'>기술</div>
                <button>저장</button>
            </div>
        </div>
    )
}

export default Preview;