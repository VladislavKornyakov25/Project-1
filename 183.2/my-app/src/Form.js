import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    
    return (
        <>
            <label htmlFor={props.name}>{label}</label>  
            <input {...props} {...field} />
            {
                meta.touched && meta.error ? 
                (
                    <div className='error'>{meta.error}</div>
                ) 
                : null
            }
        </>
    )
}
const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    
    return (
        <>
            <label htmlFor={props.name} className="checkbox">
                <input type="checkbox" {...props} {...field}/>
                    {children}
                </label>            
            {
                meta.touched && meta.error ? 
                (
                    <div className='error'>{meta.error}</div>
                ) 
                : null
            }
        </>
    )
}
const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'At least 2 symbols!!!')
                        .required('Required field!'),
                email: Yup.string()
                        .email('Wrong email adress!!!')
                        .required('Required field!!!'),
                amount: Yup.number()
                            .min(5, 'At least 5')
                            .required('Required field!!!'),
                currency: Yup.string()
                            .required('Choose a currency!'),
                text: Yup.string()
                        .min(10, 'At least 10 symbols!'),
                terms: Yup.boolean()
                        .required('Consent required!')
                        .oneOf([true], 'Consent required!')
            })}
            onSubmit =  {values => console.log(JSON.stringify(values, null, 2))}>

            <Form className="form">
                <h2>Отправить пожертвование</h2>
                
                <MyTextInput
                    label="Name"
                    id="name"
                    name="name"
                    type="text"   
                />

                <MyTextInput
                    label="Email"
                    id="email"
                    name="email"
                    type="email"   
                />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"                    
                />
                <ErrorMessage className="error" name="amount" component="div"/>
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Choose currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div"/>
                <label htmlFor="text">Text message</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div"/>                
                
                <MyCheckbox name="terms">
                    Do you agree with the privacy policy?
                </MyCheckbox>
                
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;