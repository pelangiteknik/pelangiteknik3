'use client'
import styles from '@/components/formData.module.css'
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useStore } from "@/zustand/zustand";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function FormData() {
    const setOpenFormData = useStore((state) => state.setOpenFormData)
    const openFormData = useStore((state) => state.openFormData)

    useLockBodyScroll();

    const initialValues = {
        fullName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('*'),
        address: Yup.number()
            .max(99999, 'Must be 15 characters or less')
            .required('*'),
        city: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('*'),
        country: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('*'),
        postalCode: Yup.number()
            .max(99999999, 'Must be 20 characters or less')
            .required('*'),
    })

    const handleSubmit = async (value) => {
        setOpenFormData()
    }

    return (
        <>
            <div className={styles.bgblack} onClick={setOpenFormData}>FormData</div>
            <div className={styles.formContainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, values }) => (
                        <Form>

                            <div className={styles.judul}>Informasi Pengiriman <div className={styles.close} onClick={setOpenFormData}>X</div></div>

                            <div>
                                <label htmlFor="fullName">Full Name<ErrorMessage name="fullName" className={styles.er} component="div" /> </label>
                                <Field type="text" name="fullName" />
                            </div>

                            <div>
                                <label htmlFor="address">Address <ErrorMessage name="address" className={styles.er} component="div" /></label>
                                <Field type="text" name="address" />

                            </div>

                            <div>
                                <label htmlFor="city">City <ErrorMessage name="city" className={styles.er} component="div" /></label>
                                <Field type="text" name="city" />
                            </div>

                            <div>
                                <label htmlFor="country">Country <ErrorMessage name="country" className={styles.er} component="div" /></label>
                                <Field as="select" name="country">
                                    <option value="">Select country</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
                                    {/* Add more country options here */}
                                </Field>

                            </div>

                            <div>
                                <label htmlFor="postalCode">Postal Code <ErrorMessage name="postalCode" className={styles.er} component="div" /></label>
                                <Field type="text" name="postalCode" />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Konfirmasi
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}