import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import { Link, Hidden, Button, Chip, Tooltip } from '@material-ui/core';
import { Link as LinkR, Redirect, useHistory } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FaceIcon from '@material-ui/icons/Face';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../../reducers/constants/User';
import useStyles from './style'

export default function Header() {

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory()
    const [open, setOpen] = useState(false);

    // Nếu kích thước dưới md thì đóng mở menu-res tùy ý, nhưng trên md thì bắt buộc phải đóng
    const matches = useMediaQuery(theme.breakpoints.up('md')); // tự động trả về true khi màn hình từ 1280 trở lên
    if (matches) {
        if (open) {
            setOpen(false)
        }
    }

    // lấy data từ redux-store về
    const { currentUser } = useSelector((state) => state.authReducer);
    // đăng xuất
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch({ type: LOGOUT })
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleToComponent = (idComponent) => {
        if (history.location.pathname !== '/') {
            history.push(`/?scrollTo=homePage`)
            history.location.key = idComponent
        }
        return document.getElementById(idComponent)?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    }

    const handleScrollMobile = (text) => {
        let idComponent = ''
        if (text === 'Lịch Chiếu') idComponent = 'showtimes'
        if (text === 'Cụm Rạp') idComponent = 'theater'
        if (text === 'Tin Tức') idComponent = 'news'
        if (text === 'Ứng Dụng') idComponent = 'ads'
        handleToComponent(idComponent)
        setOpen(false)
    }
    return (

        <div className={classes.root}>
            <CssBaseline />

            {/* START HEADER */}
            <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} color='default' >

                <Toolbar className={classes.spaceBetween}>

                    {/* logo */}
                    <div>
                        <img src="/img/logo.png" alt="logo" style={{ height: 50 }} onClick={() => history.push(`/`)} />
                    </div>

                    {/* 4 nội dung chính */}
                    <Hidden smDown>
                        <List >
                            <Link className={classes.link} onClick={() => handleToComponent('showtimes')}>Lịch Chiếu</Link>
                            <Link className={classes.link} onClick={() => handleToComponent('theater')}>Cụm Rạp</Link>
                            <Link className={classes.link} onClick={() => handleToComponent('news')}>Tin Tức</Link>
                            <Link className={classes.link} onClick={() => handleToComponent('ads')}>Ứng Dụng</Link>
                        </List>
                    </Hidden>

                    {/* vị trí đăng nhập/ đăng xuất */}
                    <Hidden smDown>
                        {currentUser ?
                            <List >

                                <LinkR to="/profile">
                                    <Chip variant="outlined" color="primary" label={currentUser.hoTen} icon={<FaceIcon />} />
                                </LinkR>

                                <Link>
                                    <Chip variant="outlined" color="secondary" label="Đăng xuất" onClick={handleDelete} />
                                </Link>

                            </List>
                            :
                            <List >

                                <LinkR to="/dangnhap">
                                    <Button>Đăng Nhập</Button>
                                </LinkR>

                                <LinkR to="/dangky">
                                    <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>Đăng Ký</Button>
                                </LinkR>
                            </List>
                        }
                    </Hidden>

                    {/* ICON RESPONSIVE  */}
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                            mdUp
                        >
                            {/* iCon 3 gạch ngang menu */}
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                </Toolbar>
            </AppBar>

            {/* START RESPONSIVE BÊN PHẢI */}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}

            >
                {/* icon left-right khi tắt/mở responsive */}
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                {/* phần hiển thị khi nhấn button menu */}
                {/* Divider giúp phân chia số lượng nội dung theo ý mình */}
                <Divider />
                <List>
                    {['Lịch Chiếu', 'Cụm Rạp', 'Tin Tức', 'Ứng Dụng'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} onClick={() => handleScrollMobile(text)} />
                        </ListItem>
                    ))}

                    {currentUser ?
                        <List style={{ marginLeft: "15px" }} >


                            <Tooltip title="Đăng Xuất">

                                <Chip variant="outlined" color="primary" label={currentUser.taiKhoan} icon={<FaceIcon />} />
                            </Tooltip>

                            <Link>
                                <Chip variant="outlined" color="secondary" label="Đăng xuất" onClick={handleDelete} />
                            </Link>

                        </List>
                        :
                        <List >
                            <LinkR to="/dangnhap">
                                <Button>Đăng Nhập</Button>
                            </LinkR>
                            <LinkR to="/dangky">
                                <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>Đăng Ký</Button>
                            </LinkR>
                        </List>
                    }
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}

