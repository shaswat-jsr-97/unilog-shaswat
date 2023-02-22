
import {
  Heading,
  Input,
  FormLabel,
  VStack,
  Divider,
} from '@chakra-ui/react';import { useFormik } from "formik";
import * as Yup from "yup";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./Form.module.scss"

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
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      username: Yup.string().required("*Please Fill The Mandatory Field"),
      email: Yup.string().email("Invalid Email Address").required(),
      phone: Yup.number().min(10).required(),
    }),


    onSubmit: (values) => {
      console.log("Form Values: ", values);
      alert("Submitted");
    },

  });


  return (
    // <Container maxW={'container.xl'} h={'100%'} p={'16'} >
       
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            h={'100%'}
            m={'auto'}
            my={'16'}
          >
            <form onSubmit={FormInput.handleSubmit} style={{width:'80%'}}>
            <Heading alignSelf={"center"}>Fill In Form</Heading>
            {/* <Avatar alignSelf={'center'} boxSize={'32'} /> */}

          {/* <div> */}
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
            />
            {FormInput.touched.firstName && FormInput.errors.firstName && (
            <div>
              {FormInput.errors.firstName}
            </div>
          )}
          {/* <div> */}
          <FormLabel htmlFor="validationCustom02" className="form-label">
            Last name
          </FormLabel>
            <Input 
              placeholder={'Last Name'} 
              type="text"
              name="lastName"
              onChange={FormInput.handleChange}
              value={FormInput.values.lastName} 
              className="form-control"
              id="validationCustom02"
            />
            {FormInput.touched.lastName && FormInput.errors.lastName && (
            <div>
              {FormInput.errors.lastName}
            </div>
          )}
          {/* </div> */}
          <FormLabel htmlFor="validationCustomUsername" className="form-label">
            Username
          </FormLabel>
          <Input
            placeholder={'Enter User Name'}
            type="text"
            name="username"
            onChange={FormInput.handleChange}
            value={FormInput.values.username}
            className="form-control"
            id="validationCustomUsername"
          />
          {FormInput.touched.username && FormInput.errors.username && (
              <div>
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
            className="form-control"
            id="validationCustom03"
            placeholder='Email'
          />
          {FormInput.touched.email && FormInput.errors.email && (
            <div>
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
            className="form-control"
            id="validationCustom05"
          />
          {FormInput.touched.phone && FormInput.errors.phone && (
            <div>
              {FormInput.errors.phone}
            </div>
          )}

          <div style={{display:'flex',justifyContent:'center'}}>
          <button type="submit" style={{alignItems:'center', padding:8}}>
             Submit form
          </button>
          </div>

          
          </form>
          </VStack>
       
  );
}

export default FormSetting;


