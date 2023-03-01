
import {
  Heading,
  Input,
  FormLabel,
  VStack,
  Divider,
  Container
} from '@chakra-ui/react';import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.scss";

function FormSetting() {

  const FormInput = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      check: false,
    },
    
    // form validation
    
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("*First Name is Mandatory"),
      lastName: Yup.string().required("*Last Name is Mandatory"),
      username: Yup.string().required("*Please Fill The Mandatory Field"),
      email: Yup.string().email("Invalid Email Address").required("*Email is Mandatory"),
      phone: Yup.number().min(10).required("*Phone Number is Mandatory"),
    }),


    onSubmit: (values) => {
      console.log("Form Values: ", values);
      alert("Submitted");
    },

  });

// console.log(FormInput.errors.firstName)
  return (
    <Container maxW={'container.xl'} h={'100%'} p={'16'} overflowY="auto" >
       
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            h={'100%'}
            m={'0 auto'}
            // my={'16'}
          >
            <form onSubmit={FormInput.handleSubmit} style={{width:'80%'}}>
            <Heading>Fill In Form</Heading>
            
          <div></div>
          <FormLabel htmlFor="validationCustom01" className="form-label">
            First Name
          </FormLabel>
            <Input
              placeholder={'Name'}
              type={'text'}
              name="firstName"
              id="validationCustom01"
              value={FormInput.values.firstName}
              onChange={FormInput.handleChange}
              border='1px' 
              borderColor={FormInput.errors.firstName?'red':'white'}

            />
            {FormInput.touched.firstName && FormInput.errors.firstName && (
            <div className={styles.errorInput}>
              {FormInput.errors.firstName}
            </div>
          )}
          {/* <div> */}
          <FormLabel htmlFor="validationCustom02">
            Last name
          </FormLabel>
            <Input 
              placeholder={'Last Name'} 
              type="text"
              name="lastName"
              onChange={FormInput.handleChange}
              value={FormInput.values.lastName} 
              border='1px' 
              borderColor={FormInput.errors.lastName?'red':'white'}
              id="validationCustom02"
            />
            {FormInput.touched.lastName && FormInput.errors.lastName && (
            <div className={styles.errorInput}>
              {FormInput.errors.lastName}
            </div>
          )}
        
          <FormLabel htmlFor="validationCustomUsername" className="form-label">
            Username
          </FormLabel>
          <Input
            placeholder={'Enter User Name'}
            type="text"
            name="username"
            onChange={FormInput.handleChange}
            value={FormInput.values.username}
            border='1px' 
            borderColor={FormInput.errors.username?'red':'white'}
            id="validationCustomUsername"
          />
          {FormInput.touched.username && FormInput.errors.username && (
              <div className={styles.errorInput}>
                {FormInput.errors.username}
              </div>
          )}

          <FormLabel htmlFor="validationCustom03" className="form-label">
            Email
          </FormLabel>
          <Input
            type="email"
            onChange={FormInput.handleChange}
            value={FormInput.values.email}
            name="email"
            border='1px' 
            borderColor={FormInput.errors.email?'red':'white'}
            id="validationCustom03"
            placeholder='Email'
          />
          {FormInput.touched.email && FormInput.errors.email && (
            <div className={styles.errorInput}>
              {FormInput.errors.email}
            </div>
          )}
          
          <FormLabel htmlFor="validationCustom05" className="form-label">
            Phone Number
          </FormLabel>
          <Input
            onChange={FormInput.handleChange}
            value={FormInput.values.phone}
            type="tel"
            placeholder='Phone Number'
            name="phone"
            border='1px' 
            borderColor={FormInput.errors.phone?'red':'white'}
            id="validationCustom05"
          />
          {FormInput.touched.phone && FormInput.errors.phone && (
            <div className={styles.errorInput}>
              {FormInput.errors.phone}
            </div>
          )}

          <div style={{display:'flex',justifyContent:'center'}}>
          <button type="submit" style={{alignItems:'center', padding:8}} className={styles.submitButton}>
             Submit form
          </button>
          </div>

          
          </form>
          </VStack>
       </Container>
  );
}

export default FormSetting;


