import {React, useState} from 'react';
import { Grid, Box, Typography, Stack, Divider, List, ListItem, ListItemText, ListSubheader, Container } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import SearchIcon from '../../assets/images/search.png'

import './DraftPage.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function DraftPage() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [toolBtn, setToolBtn] = useState(null);
    // const [previewTool, setPreviewTool] = useState(false);
    // const [searchTool, setSearchTool] = useState(false);
    // const [writingTool, setWritingTool] = useState(false);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    console.log(editorState)
   
    
    return (
        <Stack height="100vh" alignItems="center" justifyContent="center" >
            <div className="draft-wrapper" position="absolute">
                <div className="navigate-button">
                    <button className={`draftBtn ${toolBtn == "preview" ? "previewOn" : ""}`} onClick={()=>{setToolBtn("preview");}}>미리<br/>보기</button>
                    <button className={`draftBtn ${toolBtn == "writing" ? "writeOn" : ""}`} onClick={()=>{setToolBtn("writing");}}>글감</button>
                    <button className={`draftBtn ${toolBtn == "search" ? "searchOn" : ""}`} onClick={()=>{setToolBtn("search");}}><img width="25px" src={SearchIcon}></img></button>
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
                toolBtn == "search" 
                ? (
                    <div className='popup-tool'>
                        <div className='close-btn' onClick={()=>{setToolBtn(null);}}>X</div>
                    </div>
                )
                : <></>
            }
            {
                toolBtn == "writing"  
                ? (
                    <div className='popup-tool'>
                        <div className='close-btn' onClick={()=>{setToolBtn(null);}}>X</div>
                    </div>
                )
                : <></>
            }
            
        </Stack>
    )
}

export default DraftPage
