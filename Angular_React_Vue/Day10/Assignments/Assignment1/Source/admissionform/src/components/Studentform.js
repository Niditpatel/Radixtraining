import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react'

const StudentData = yup.object({
    Name: yup.object({
        FirstName: yup.string().required('FirstName is required '),
        MiddleName: yup.string().required('MiddleName is required'),
        LastName: yup.string().required('LastName is required')
    }),
    Birthdetail: yup.object({
        DOB: yup.string().required('Birth Date is Required'),
        PlaceOFBirth: yup.string()
    }),
    Firstlanguage: yup.string(),
    Address: yup.object({
        City: yup.string(),
        State: yup.string(),
        Country: yup.string(),
        PIN: yup.string()
    }),
    Father: yup.object({
        Fullname: yup.object({
            FirstName: yup.string().required('FirstName is required'),
            MiddleName: yup.string().required('MiddleName is required'),
            LastName: yup.string().required('LastName is required')
        }),
        Email: yup.string().email(),
        EducationQualification: yup.string(),
        Profession: yup.string(),
        Designation: yup.string(),
        Phone: yup.string().required('Phone is required').matches(/[6-9]{1}[0-9]{9}/, 'phone number is not valid').min(10, 'Minimum 10 number is required').max(10, 'maximum 10 number is allowed')
    }),
    Mother: yup.object({
        Fullname: yup.object({
            FirstName: yup.string().required('FirstName is required'),
            MiddleName: yup.string().required('MiddleName is required'),
            LastName: yup.string().required('LastName is required')
        }),
        Email: yup.string().email(),
        EducationQualification: yup.string(),
        Profession: yup.string(),
        Designation: yup.string(),
        Phone: yup.string().required('Phone is required').matches(/[6-9]{1}[0-9]{9}/, 'phone number is not valid').min(10, 'Minimum 10 number is required').max(10, 'maximum 10 number is allowed')
    }),
    EmergencyList: yup.array().of(
        yup.object().shape({
            Relation: yup.string().required('relation is required'),
            Phone: yup.string().required('Phone is required').matches(/[6-9]{1}[0-9]{9}/, 'phone number is not valid').min(10, 'Minimum 10 number is required').max(10, 'maximum 10 number is allowed')
        })
    ),
    ReferenceList: yup.array().of(
        yup.object().shape({
            Address: yup.string().required('Address is required'),
            Phone: yup.string().required('Phone is required').matches(/[6-9]{1}[0-9]{9}/, 'phone number is not valid').min(10, 'Minimum 10 number is required').max(10, 'maximum 10 number is allowed')
        }
        )
    )
}
);

export default function Studentform() {
    const { register, handleSubmit, control, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(StudentData) });
    const { fields: EmergencyFields, append: EmergencyAppend, remove: EmergencyRemove } = useFieldArray({ control, name: 'EmergencyList' });
    const { fields: ReferenceFields, append: ReferenceAppend, remove: ReferenceRemove } = useFieldArray({ control, name: 'ReferenceList' });
    const [FinalData, setFinalData] = useState([]);
    const onsubmit = data => {
        setFinalData([...FinalData, data]);
        console.log(FinalData);
    };
    return (
        <div>
            <div className="h-full w-full p-3  bg-black ">
                <div className="border bg-blue-50 rounded-xl">
                    <form className="form" onSubmit={handleSubmit(onsubmit)}>
                        <div className=" p-4">
                            <h1 className="text-4xl mb-5">Your Detail</h1>
                            <div className="border rounded-xl bg-gradient-to-r from-blue-400  to-blue-100 px-2 my-2">
                                <h1 className="text-2xl">FullName</h1>
                                <div className="form-group flex  space-x-8 px-3 my-3 border bg-gradient-to-l from-blue-400  to-blue-100 rounded-xl">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            FirstName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="your Name"
                                                {...register('Name.FirstName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                your name
                                            </label>
                                        </div>
                                        <div> {errors.Name?.FirstName?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            MiddleName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Father Name"
                                                {...register('Name.MiddleName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father Name
                                            </label>
                                        </div>
                                        <div> {errors.Name?.MiddleName?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            LastName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="surname"
                                                {...register('Name.LastName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father Name
                                            </label>
                                        </div>
                                        <div> {errors.Name?.LastName?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border bg-gradient-to-r from-blue-400  to-blue-100 rounded-xl my-2 px-2">
                                <h1 className="text-2xl">Birth Details</h1>
                                <div className="form-group my-3 px-3 flex space-x-8 border rounded-xl bg-gradient-to-l from-blue-400  to-blue-100">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Date Of Birth :{' '}
                                        </label>
                                        <div className="relative datepicker form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="date"
                                                className="textbox-n form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="date of birth"
                                                {...register('Birthdetail.DOB')}
                                                onFocus={(e) => (e.type = 'date')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                birth date
                                            </label>
                                        </div>
                                        <div> {errors.Birthdetail?.DOB?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Place Of Birth :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="PlaceOfBirth"
                                                {...register('Birthdetail.PlaceOfBirth')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                birth place
                                            </label>
                                        </div>
                                        <div> {errors.Birthdetail?.PlaceOfBirth?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border rounded-xl bg-gradient-to-r from-blue-400  to-blue-100 px-2 my-2">
                                <h1 className="text-2xl">Languages</h1>
                                <div className="form-group flex  space-x-8 px-3 border bg-gradient-to-l from-blue-400  to-blue-100  rounded-xl my-3">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            First Language :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="First Language"
                                                {...register('Firstlanguage')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                First Language
                                            </label>
                                        </div>
                                        <div> {errors.Firstlanguage?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border rounded-xl bg-gradient-to-r from-blue-400  to-blue-100 px-2 my-2">
                                <h1 className="text-2xl">Address</h1>
                                <div className="form-group flex  space-x-8 px-3 border rounded-xl bg-gradient-to-l from-blue-400  to-blue-100 my-3">
                                    <span>
                                        <label className="text-gray-700 text-xl ">City : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="City"
                                                {...register('Address.City')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                city name
                                            </label>
                                        </div>
                                        <div> {errors.Address?.City?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">State : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="State"
                                                {...register('Address.State')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                name of state
                                            </label>
                                        </div>
                                        <div> {errors.Address?.State?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">Country : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Country"
                                                {...register('Address.Country')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                name of Country
                                            </label>
                                        </div>
                                        <div> {errors.Address?.Country?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">PIN : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="postal code"
                                                {...register('Address.PIN')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Enter Postal Code here ..
                                            </label>
                                        </div>
                                        <div> {errors.Address?.PIN?.message}</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 form-group">
                            <h1 className="text-4xl">Father Detail</h1>
                            <div className="border  bg-gradient-to-r from-blue-400  to-blue-100 my-2 px-3 rounded-xl">
                                <h1 className="text-2xl">FullName</h1>
                                <div className="form-group flex  space-x-8 px-3 my-3 border rounded-xl  bg-gradient-to-l from-blue-400  to-blue-100">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            FirstName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Father Name"
                                                {...register('Father.Fullname.FirstName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father Name
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Fullname?.FirstName?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            MiddleName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="GrandFather Name"
                                                {...register('Father.Fullname.MiddleName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                GradFather Name
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Fullname?.MiddleName?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            LastName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="surname"
                                                {...register('Father.Fullname.LastName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                surname
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Fullname?.LastName?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl">
                                <h1 className="text-2xl">Additional</h1>
                                <div className="flex space-x-8 my-2 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Education Qualification :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="EducationQualification"
                                                {...register('Father.EducationQualification')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father's qalification
                                            </label>
                                        </div>
                                        <div> {errors.Father?.EducationQualification?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Profession :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Profession"
                                                {...register('Father.Profession')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father's Work
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Profession?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Designation :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Designation"
                                                {...register('Father.Designation')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father's Post On Work
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Designation?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl my-2">
                                <h1 className="text-2xl">Contact </h1>
                                <div className="flex space-x-8 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3 my-2">
                                    <span>
                                        <label className="text-gray-700 text-xl ">Phone : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Phone"
                                                {...register('Father.Phone')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Phone No.
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Phone?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">Email : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email"
                                                {...register('Father.Email')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                ex. .....@gmail.com
                                            </label>
                                        </div>
                                        <div> {errors.Father?.Email?.message}</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 form-group">
                            <h1 className="text-4xl">Mother Detail</h1>
                            <div className="border  bg-gradient-to-r from-blue-400  to-blue-100 my-2 px-3 rounded-xl">
                                <h1 className="text-2xl">FullName</h1>
                                <div className="form-group flex  space-x-8 px-3 my-3 border rounded-xl  bg-gradient-to-l from-blue-400  to-blue-100">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            FirstName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Mother Name"
                                                {...register('Mother.Fullname.FirstName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Mother Name
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Fullname?.FirstName?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            MiddleName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Father Name"
                                                {...register('Mother.Fullname.MiddleName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Father Name
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Fullname?.MiddleName?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            LastName :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="surname"
                                                {...register('Mother.Fullname.LastName')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                surname
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Fullname?.LastName?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl">
                                <h1 className="text-2xl">Additional</h1>
                                <div className="flex space-x-8 my-2 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3">
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Education Qualification :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="EducationQualification"
                                                {...register('Mother.EducationQualification')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Mother's qalification
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.EducationQualification?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Profession :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Profession"
                                                {...register('Mother.Profession')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Mother's Work
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Profession?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">
                                            Designation :{' '}
                                        </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Designation"
                                                {...register('Mother.Designation')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Mother's Post On Work
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Designation?.message}</div>
                                    </span>
                                </div>
                            </div>
                            <div className="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl my-2">
                                <h1 className="text-2xl">Contact </h1>
                                <div className="flex space-x-8 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3 my-2">
                                    <span>
                                        <label className="text-gray-700 text-xl ">Phone : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Phone"
                                                {...register('Mother.Phone')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                Phone No.
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Phone?.message}</div>
                                    </span>
                                    <span>
                                        <label className="text-gray-700 text-xl ">Email : </label>
                                        <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email"
                                                {...register('Mother.Email')}
                                            />
                                            <label
                                                htmlFor="floatingInput"
                                                className="text-gray-700 text-sm capitalize"
                                            >
                                                ex. .....@gmail.com
                                            </label>
                                        </div>
                                        <div> {errors.Mother?.Email?.message}</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 my-2">
                            <h1 className="text-4xl">Emergency</h1>
                            <div className="border rounded-xl bg-gradient-to-r from-blue-400 to-blue-100 my-2 px-3 ">
                                <h1 className="text-2xl">Contact List With Relation</h1>
                                {EmergencyFields.map((item, i) => (
                                    <div key={i} className="border rounded-xl bg-gradient-to-l from-blue-400 to-blue-100 my-2 px-3">
                                        <div className="flex space-x-8">
                                            <span>
                                                <label className="text-gray-700 text-xl">
                                                    Relation :
                                                </label>
                                                <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                                    <input type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        name={`EmergencyList[${i}]Relation`}
                                                        placeholder="Relation"
                                                        {...register(`EmergencyList.${i}.Relation`)} />
                                                    <label
                                                        htmlFor="floatingInput"
                                                        className="text-gray-700 text-sm capitalize"
                                                    >
                                                        ex. mother , father or etc.
                                                    </label>
                                                    <div> {errors.EmergencyList?.[i]?.Relation?.message}</div>
                                                </div>
                                            </span>
                                            <span>
                                                <label className="text-gray-700 text-xl">
                                                    Relation :
                                                </label>
                                                <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                                    <input type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        name={`EmergencyList[${i}]Phone`}
                                                        placeholder="Relation"
                                                        {...register(`EmergencyList.${i}.Phone`)} />
                                                    <label
                                                        htmlFor="floatingInput"
                                                        className="text-gray-700 text-sm capitalize"
                                                    >
                                                        ex. mother , father or etc.
                                                    </label>
                                                    <div> {errors.EmergencyList?.[i]?.Phone?.message}</div>
                                                </div>
                                            </span>
                                            <span>
                                                <button type="button" className="text-4xl my-auto h-fit" onClick={() => EmergencyRemove(i)}>-</button>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="text-4xl" onClick={() => EmergencyAppend({ Relation: "", Phone: "" })}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="px-3 my-2">
                            <h1 className="text-4xl">Reference</h1>
                            <div className="border rounded-xl bg-gradient-to-r from-blue-400 to-blue-100 my-2 px-3 ">
                                <h1 className="text-2xl capitalize">Address with contact number</h1>
                                {ReferenceFields.map((item, i) => (
                                    <div key={i} className="border rounded-xl bg-gradient-to-l from-blue-400 to-blue-100 my-2 px-3">
                                        <div className="flex space-x-8">
                                            <span>
                                                <label className="text-gray-700 text-xl">
                                                    Address :
                                                </label>
                                                <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                                    <input type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        name={`ReferenceList[${i}]Address`}
                                                        placeholder="Address"
                                                        {...register(`ReferenceList.${i}.Address`)} />
                                                    <label
                                                        htmlFor="floatingInput"
                                                        className="text-gray-700 text-sm capitalize"
                                                    >
                                                        ex. mother , father or etc.
                                                    </label>
                                                    <div> {errors.ReferenceList?.[i]?.Address?.message}</div>
                                                </div>
                                            </span>
                                            <span>
                                                <label className="text-gray-700 text-xl">
                                                    Phone :
                                                </label>
                                                <div className="relative form-floating mb-3 mt-2 xl:w-96">
                                                    <input type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        name={`ReferenceList[${i}]Phone`}
                                                        placeholder="Phone"
                                                        {...register(`ReferenceList.${i}.Phone`)} />
                                                    <label
                                                        htmlFor="floatingInput"
                                                        className="text-gray-700 text-sm capitalize"
                                                    >
                                                        ex. mother , father or etc.
                                                    </label>
                                                    <div> {errors.ReferenceList?.[i]?.Phone?.message}</div>
                                                </div>
                                            </span>
                                            <span>
                                                <button type="button" className="text-4xl my-auto h-fit" onClick={() => ReferenceRemove(i)}>-</button>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="text-4xl" onClick={() => ReferenceAppend({ Address: "", Phone: "" })}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-100 my-6 px-2">
                <table className="table table-auto border border-collapse">
                    <caption className="text-3xl my-3">Student Data </caption>
                    <thead>
                        <tr className=" bg-gray-400">
                            <th className="border border-black p-2">Name</th>
                            <th className="border border-black p-2">Birth Date</th>
                            <th className="border border-black p-2">Place Of Birth</th>
                            <th className="border border-black p-2">First Language</th>
                            <th className="border border-black p-2">Address</th>
                            <th className="border border-black p-2">Emergency </th>
                            <th className="border border-black p-2">Reference</th>
                        </tr>
                    </thead>

                    {FinalData.length < 1 ?
                        <tbody>
                            <tr className="border border-black " >
                                <td colSpan="7" className="text-center capitalize"> there is no Data to show</td>
                            </tr>
                        </tbody>
                        :
                        <tbody>
                            {
                                FinalData.map(item => {
                                    return (
                                        <tr key={item.Name.FirstName}>
                                            <td>{item.Name.FirstName} &nbsp; {item.Name.MiddleName} &nbsp; {item.Name.LastName}</td>
                                            <td>{item.Birthdetail.DOB}</td>
                                            <td>{item.Birthdetail.PlaceOfBirth}</td>
                                            <td>{item.Firstlanguage}</td>
                                            <td>{item.Address.City} &nbsp; {item.Address.State} &nbsp; {item.Address.Country} &nbsp; {item.Address.PIN} </td>
                                            <td>{item.EmergencyList === undefined ?
                                                <span></span>
                                                :
                                                <span>
                                                    {item.EmergencyList.map(e => {
                                                        return (
                                                            <span key={e.Relation}>{e.Relation}&nbsp;{e.Phone}</span>
                                                        )
                                                    })}
                                                </span>
                                            }
                                            </td>
                                            <td>{item.ReferenceList === undefined ?
                                                <span></span>
                                                :
                                                <span>
                                                    {item.ReferenceList.map(r => {
                                                        return (
                                                            <span key={r.Address}>{r.Address}&nbsp;{r.Phone}</span>
                                                        )
                                                    })}
                                                </span>
                                            }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
            <div className="bg-gray-100 my-6 px-2">
                <table className="table table-auto border border-collapse">
                    <caption className="text-3xl my-3">Father  Details </caption>
                    <thead>
                        <tr className=" bg-gray-400">
                            <th className="border border-black p-2">Name</th>
                            <th className="border border-black p-2">Education Qualification</th>
                            <th className="border border-black p-2">Work</th>
                            <th className="border border-black p-2">Designation At Work</th>
                            <th className="border border-black p-2">Email</th>
                            <th className="border border-black p-2">Contact Number</th>
                        </tr>
                    </thead>

                    {FinalData.length < 1 ?
                        <tbody>
                            <tr className="border border-black " >
                                <td colSpan="7" className="text-center capitalize"> there is no Data to show</td>
                            </tr>
                        </tbody>
                        :
                        <tbody>
                            {
                                FinalData.map(item => {
                                    return (
                                        <tr key={item.Name.FirstName}>
                                            <td>{item.Father.Fullname.FirstName}&nbsp; {item.Father.Fullname.MiddleName} &nbsp; {item.Father.Fullname.LastName} </td>
                                            <td>{item.Father.EducationQualification}</td>
                                            <td>{item.Father.Profession}</td>
                                            <td>{item.Father.Designation}</td>
                                            <td>{item.Father.Email}</td>
                                            <td>{item.Father.Phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
            <div className="bg-gray-100 my-6 px-2">
                <table className="table table-auto border border-collapse">
                    <caption className="text-3xl my-3">Mother  Details </caption>
                    <thead>
                        <tr className=" bg-gray-400">
                            <th className="border border-black p-2">Name</th>
                            <th className="border border-black p-2">Education Qualification</th>
                            <th className="border border-black p-2">Work</th>
                            <th className="border border-black p-2">Designation At Work</th>
                            <th className="border border-black p-2">Email</th>
                            <th className="border border-black p-2">Contact Number</th>
                        </tr>
                    </thead>

                    {FinalData.length < 1 ?
                        <tbody>
                            <tr className="border border-black " >
                                <td colSpan="7" className="text-center capitalize"> there is no Data to show</td>
                            </tr>
                        </tbody>
                        :
                        <tbody>
                            {
                                FinalData.map(item => {
                                    return (
                                        <tr key={item.Name.FirstName}>
                                            <td>{item.Mother.Fullname.FirstName}&nbsp; {item.Mother.Fullname.MiddleName} &nbsp; {item.Mother.Fullname.LastName} </td>
                                            <td>{item.Mother.EducationQualification}</td>
                                            <td>{item.Mother.Profession}</td>
                                            <td>{item.Mother.Designation}</td>
                                            <td>{item.Mother.Email}</td>
                                            <td>{item.Mother.Phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
        </div>

    )
}

