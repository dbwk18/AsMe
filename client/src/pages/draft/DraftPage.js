import {React, useState} from 'react';
import { Grid, Box, Typography, Stack, Divider, List, ListItem, ListItemText, ListSubheader, Container } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Preview from './Preview';
import TrashIcon from '../../assets/images/trashcan.png'
import TrashIconOn from '../../assets/images/trashcanOn.png'
import CloseBtn from '../../assets/images/closeBtn.png'
import ProfileImg from '../../assets/images/profileImg.png'
import defaultImg from '../../assets/images/WhitePaper2.png'
import { dateToString } from '../../utils/Format';

import './DraftPage.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function DraftPage() {

    const today = dateToString(new Date());

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("나는 어디서 힘을 얻을까?");

    const [toolBtn, setToolBtn] = useState(null);
    const [textQuery, setTextQuery] = useState('flying dog');

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        setContent(stateToHTML(editorState.getCurrentContent()));
    };

    // console.log(editorState)

    function get_image(msg) {
        console.log(msg)
        const response =fetch(`http://0.0.0.0:8080/img/${msg}}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                text_qury: msg
            }
        }).then(res => {
            console.log(res.data);
        }).catch(error => {
            console.log(error)
        })
    }
    
    return (
        <Stack height="100vh" alignItems="center" justifyContent="center" >
            <div className="draft-wrapper" position="absolute">
                <div className="navigate-button">
                    <button className={`draftBtn ${toolBtn == "preview" ? "previewOn" : ""}`} onClick={()=>{setToolBtn("preview");}}>미리<br/>보기</button>
                    <button className={`draftBtn ${toolBtn == "writing" ? "writeOn" : ""}`} onClick={()=>{setToolBtn("writing");}}>글감<br/>보기</button>
                    <button className={`draftBtn ${toolBtn == "trash" ? "trashOn" : ""}`} onClick={()=>{setToolBtn("trash");}}><img width="25px" src={toolBtn == 'trash' ? TrashIconOn : TrashIcon}></img></button>
                </div>
                <Editor
                    // class for editor & toolbar
                    wrapperClassName="wrapper-class"
                    editorClassName="editor"
                    toolbarClassName="toolbar-class"
                    // settings for toolbar
                    toolbar={{
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: false },
                        }} 
                    placeholder="내용을 작성해주세요."
                    localization={{
                        locale: 'ko',
                        }}
                    // initial settings
                    editorState={editorState}
                    // change on editior state -> onEditorStateChange 
                    onEditorStateChange={onEditorStateChange}
                />
            </div>
            {
                toolBtn == "preview" 
                ? (
                    <>
                        <div className="black_bg"></div>
                        <Preview setToolBtn={setToolBtn} content={content} title={title} date={today} />
                    </>
                    
                )
                : <></>
            }
            {
                toolBtn == "writing"  
                ? (
                    <div className='popup-tool'>
                        <div className='popup-header'>
                            <div>
                                <input className='popup-input' type="text" placeholder="글감을 검색하세요"/>
                            </div>
                            <div className='close-btn' onClick={()=>{setToolBtn(null);}}>
                                <img width="30px" src={CloseBtn} /> 
                            </div>
                        </div>
                        <div className='popup-header'>
                            <div>
                                <img width="70px" src={ProfileImg} />
                            </div>
                            <div className='popup-text'>
                                글쓴이님의 휴지통 목록
                            </div>
                        </div>
                        <div style={{position:"relative", top: "20px"}}>
                            <div className='popup-content'>
                                <img width="150px" src={defaultImg} />
                                <div style={{display: "flex", flexDirection: "column", padding: "0px 45px"}}>
                                    <div className='head'>
                                        <div className='idx'>01</div>
                                        <div className='date'>2022-04-21</div>
                                    </div>
                                    <div className='title'>우주</div>
                                    <div style={{display: "flex"}}>
                                        <div className='tag'>마음</div>
                                    </div>
                                </div>
                            </div>

                            <div className='popup-content'>
                                <img width="150px" src={defaultImg} />
                                <div style={{display: "flex", flexDirection: "column", padding: "0px 45px"}}>
                                    <div className='head'>
                                        <div className='idx'>02</div>
                                        <div className='date'>2022-04-21</div>
                                    </div>
                                    <div className='title'>팡파레</div>
                                    <div style={{display: "flex"}}>
                                        <div className='tag'>바람</div>
                                        <div className='tag'>싱그러운 설렘</div>
                                    </div>
                                </div>
                            </div>

                            <div className='popup-content'>
                                <img width="150px" src={defaultImg} />
                                <div style={{display: "flex", flexDirection: "column", padding: "0px 45px"}}>
                                    <div className='head'>
                                        <div className='idx'>01</div>
                                        <div className='date'>2022-04-21</div>
                                    </div>
                                    <div className='title'>우정</div>
                                    <div style={{display: "flex"}}>
                                        <div className='tag'>친구</div>
                                        <div className='tag'>역경</div>
                                    </div>
                                </div>
                            </div>

                            <div className='popup-content'>
                                <img width="150px" src={defaultImg} />
                                <div style={{display: "flex", flexDirection: "column", padding: "0px 45px"}}>
                                    <div className='head'>
                                        <div className='idx'>01</div>
                                        <div className='date'>2022-04-21</div>
                                    </div>
                                    <div className='title'>운동하기</div>
                                    <div style={{display: "flex"}}>
                                        <div className='tag'>운동</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                )
                : <></>
            }
            {
                toolBtn == "trash" 
                ? (
                    <div className='toast-message'>
                        휴지통으로 이동하였습니다.
                        <div style={{marginLeft: "auto", marginRight: "20px"}}>
                            <img width="20px" src={CloseBtn} onClick={()=>{setToolBtn(null);}} />
                        </div>
                    </div>
                )
                : <></>
            }
            
        </Stack>
    )
}

export default DraftPage
