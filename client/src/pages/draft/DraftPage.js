import {React, useState} from 'react';
import { Grid, Box, Typography, Stack, Divider, List, ListItem, ListItemText, ListSubheader, Container } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import './DraftPage.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

function DraftPage() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [previewTool, setPreviewTool] = useState(false);
    const [searchTool, setSearchTool] = useState(false);
    const [writingTool, setWritingTool] = useState(false);

    const [textQuery, setTextQuery] = useState('flying dog')

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    console.log(editorState)
   

    function get_image(msg) {
        console.log(msg)
        const response = fetch(`http://0.0.0.0:8080/img/${msg}}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                text_qury: msg
            }
        }).then(res => {
            console.log(res.json());
        }).catch(error => {
            console.log(error)
        })
    }
    
    return (
        <Stack height="100vh" alignItems="center" justifyContent="center" >
            <div className="draft-wrapper" position="absolute">
                <div className="navigate-button">
                    <button className="draftBtn"onClick={()=>{setPreviewTool(true);}}>미리보기</button>
                    <button className="draftBtn" onClick={()=>{setWritingTool(true);}}>글감추천</button>
                    <button className="draftBtn" onClick={()=>{setSearchTool(true);}}>검색창</button>
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
                previewTool 
                ? (
                    <div className='preview-tool'>
                        <div className='close-btn' onClick={()=>{setPreviewTool(false);}}>X</div>
                    </div>
                )
                : <></>
            }
            {
                searchTool 
                ? (
                    <div className='popup-tool'>
                        <div className='close-btn' onClick={()=>{setSearchTool(false);}}>X</div>
                        <button onClick={()=>{get_image('flying dog');}}>검색</button>
                    </div>
                )
                : <></>
            }
            {
                writingTool 
                ? (
                    <div className='popup-tool'>
                        <div className='close-btn' onClick={()=>{setWritingTool(false);}}>X</div>
                    </div>
                )
                : <></>
            }
        </Stack>
    )
}

export default DraftPage
