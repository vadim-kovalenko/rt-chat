import RegisterFrom from '../components/RegisterFrom'
import { withFormik } from 'formik';

export default withFormik({
    validate: values => {
        let errors = {};

        if (!values.email) {
            errors.email = 'Поле e-mail обязательно';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Невалидный e-mail адрес';
        }

        if (!values.password) {
            errors.password = 'Введите пароль';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
            errors.password = 'Слишком лёгкий пароль';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterFrom',
})(RegisterFrom);