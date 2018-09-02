import React, {Component} from 'react';
import { connect } from 'react-redux';
import AllWords from '../components/adata.js';


const mapStateToProps = (state,ownProps) => ({
    words : state.words
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick : () => dispatch()
})



export default connect( mapStateToProps, mapDispatchToProps)(AllWords);

