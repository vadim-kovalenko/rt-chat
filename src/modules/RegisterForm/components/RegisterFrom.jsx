import React, {Component} from 'react';
import {Form, Icon, Input} from "antd";
import {Link} from 'react-router-dom'

import {Block, Button} from "../../../components";

class RegisterFrom extends Component {
    render() {
        const success = false;
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироватся</p>
                </div>
                <Block>
                    {!success ?
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>
                                <Input
                                    size="large"
                                    prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="E-Mail"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    size="large"
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Ваше имя"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Повторите пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" size="large">
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
                        </Form> :
                        <div className="auth__success-block">
                            <div>
                                <Icon style={{ fontSize: '50px'}} type="info-circle" theme="twoTone"/>
                            </div>
                            <h3>Подтвердите свой аккаунт</h3>
                            <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                        </div>
                    }
                </Block>
            </div>
        )
    }
}

export default RegisterFrom;