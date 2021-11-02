import { Button } from "@mui/material";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Index from "../components/Index/Index";
import Mesagge from "../components/Message/Mesagge";
import Profile from "../components/Profile/Profile";
import Users from "../components/Users/Users";

export default function Routers(){

    const Menu = ()=>{
        return (
            <Router>
                <div className="cont">
                    <Switch>
                        <Route to="/users" className={<Button>Usuarios</Button>}>
                            <Users />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route to="/profile" className={<Button>Mi perfil</Button>}>
                            <Profile />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route to="/" className={<Button>Foros</Button>}>
                            <Index />
                        </Route>
                    </Switch>

                </div>
            </Router>

        );
    };
}