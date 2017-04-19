import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import { NavToggleButton } from '../styled/NavDrawer'

export default class NavDrawer extends Component {
    state = {
        open: true,
        width: 250
    }
    
    toggle = () => {
        this.setState((prevState, props) => { 
            return {
                open: !prevState.open
            }
        })
    }
    
    render() {
        return (
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    width={this.state.width}
                    open={this.state.open}
                />
                <Drawer 
                    open={this.state.open}
                    width={this.state.width}
                    >
                    <div style={{
                        height: '200px',
                        width: '100%',
                        backgroundColor: 'salmon'
                        
                    }}>LoginContainer</div>
                    <Divider />
                    <Link to='/'>
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText='Play'    
                        />
                    </Link>
                    <Link to='/Profile'>
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText='Profile'    
                        />
                    </Link>
                    
                </Drawer>
            </div>
        )
    }
}