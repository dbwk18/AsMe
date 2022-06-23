import {React, useState} from 'react';
import { Grid, Box, Typography, Stack, Divider, List, ListItem, ListItemText, ListSubheader, Container } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import TrashIcon from '../../assets/images/trashcan.png'
import CloseBtn from '../../assets/images/closeBtn.png'
import ProfileImg from '../../assets/images/profileImg.png'
import defaultImg from '../../assets/images/WhitePaper2.png'

import './DraftPage.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

function DraftPage() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [toolBtn, setToolBtn] = useState(null);
    const [textQuery, setTextQuery] = useState('flying dog')

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    console.log(editorState)
   

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
                    <button className={`draftBtn ${toolBtn == "trash" ? "trashOn" : ""}`} onClick={()=>{setToolBtn("trash");}}><img width="25px" src={TrashIcon}></img></button>
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
                    <div className='preview-tool'>
                        <div className='close-btn' onClick={()=>{setToolBtn(null);}}>X</div>
                    </div>
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
                                000님의 휴지통 목록
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
                                    <div className='title'>운동하기</div>
                                    <div style={{display: "flex"}}>
                                        <div className='tag'>운동</div>
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
                                    <div className='title'>운동하기</div>
                                    <div style={{display: "flex"}}>
                                        <div className='tag'>김치찌개</div>
                                        <div className='tag'>배고파요</div>
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
                      
                    </div>
                )
                : <></>
            }
            
        </Stack>
    )
}

export default DraftPage
