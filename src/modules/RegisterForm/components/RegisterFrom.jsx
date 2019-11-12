import React from 'react';
import {Form, Icon, Input} from "antd";
import {Link} from 'react-router-dom'

import {Block, Button} from "../../../components";

const success = false;

const RegisterFrom = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироватся</p>
            </div>
            <Block>
                {!success ?
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item
                            validateStatus={
                                !touched.email ? '' : errors.email ? 'error' : 'success'
                            }
                            help={!touched.email ? '' : errors.email}
                            hasFeedback>
                            <Input
                                id="email"
                                size="large"
                                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="E-Mail"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                id="name"
                                size="large"
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="text"
                                placeholder="Ваше имя"
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={
                                !touched.password ? '' : errors.password ? 'error' : 'success'
                            }
                            help={!touched.password ? '' : errors.password}
                            hasFeedback>
                            <Input
                                id="password"
                                size="large"
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Пароль"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                            {isSubmitting && !isValid && <span>Ошибка!</span>}
                            <Button type="primary" size="large" onClick={handleSubmit}>
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

export default RegisterFrom;