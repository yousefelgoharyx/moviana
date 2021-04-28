import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import {
    Disc,
    Search,
    Clock,
    Heart,
    Music,
    Book,
    Activity,
    Tv,
    List,
} from 'react-feather';
import { NavLink } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import Account from '../Account/Account';

const browse = [
    { title: 'Hot', icon: Disc, url: '/' },
    { title: 'Anime', icon: Tv, url: '/anime' },
    { title: 'Manga', icon: Book, url: '/manga' },
    { title: 'Music', icon: Music, url: '/music' },
    { title: 'Explore', icon: Search, url: '/search' },
];
const your_links = [
    { title: 'Recently played', icon: Clock, url: '/recently-played' },
    { title: 'Favourites', icon: Heart, url: '/fav' },
    { title: 'For You', icon: Activity, url: '/for-you' },
];

const Link = (props) => {
    return (
        <div className="sidebar__link" onClick={props.onClick}>
            <NavLink to={props.to} exact={props.exact ? props.exact : false}>
                {props.children}
            </NavLink>
        </div>
    );
};
const LinksHeading = ({ text }) => (
    <div className="sidebar__links-title">{text}</div>
);

const Sidebar = () => {
    const [style, set] = useSpring(() => ({ transform: 'translate(0%,0%)' }));
    const [toggle, settoggle] = useState(false);

    useEffect(() => {
        function resize() {
            if (window.innerWidth > 768) {
                set({ transform: 'translate(0%,0%)' });
            }
            if (window.innerWidth <= 768 && toggle === false) {
                set({ transform: 'translate(-100%,0%)' });
            }
        }
        resize();
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [set, toggle]);
    const hideSidebar = () => {
        if (window.innerWidth <= 768) {
            settoggle(false);
            set({
                transform: 'translate(-100%,0%)',
            });
        }
    };
    return (
        <>
            <animated.div className="sidebar" style={style}>
                <div className="sidebar__logo">Animeto</div>
                <div className="sidebar__links">
                    <LinksHeading text="Browse" />
                    {browse.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                to={link.url}
                                exact={true}
                                onClick={hideSidebar}
                                key={link.title}
                            >
                                <Icon />
                                {link.title}
                            </Link>
                        );
                    })}
                </div>

                <div className="sidebar__links">
                    <LinksHeading text="Your library" />
                    {your_links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                to={link.url}
                                exact={true}
                                onClick={hideSidebar}
                                key={link.title}
                            >
                                <Icon />
                                {link.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="sidebar__links">
                    <LinksHeading text="Lists" />
                    <Link to="/lists/marvel" onClick={hideSidebar}>
                        <List />
                        Marvel
                    </Link>
                </div>
            </animated.div>
            <Account
                onClick={() => {
                    settoggle(!toggle);
                    set({
                        transform: !toggle
                            ? 'translate(0%,0%)'
                            : 'translate(-100%,0%)',
                    });
                }}
            />
        </>
    );
};

export default Sidebar;
