import React from 'react';
import style from './error_boundary.module.css';
class ErrorBoundary extends React.Component {
    declare state:any;
    constructor(props:any) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error:any, errorInfo:any) {
        console.log(error, errorInfo)
    }
    render() {
        if (this.state?.hasError) {
            return <div className={style.wrapper}>
                <h1>Sharma.Shop</h1>
                <small className={style.small}>We are facing some problem at the moment</small>
                <small className={style.small}>Service Request: 9818031042</small>
                <small className={style.small}>Technical Assistance: 9818031042</small>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;