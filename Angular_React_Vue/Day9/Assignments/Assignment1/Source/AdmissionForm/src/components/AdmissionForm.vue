<template>
    <div class="h-full w-full p-3  bg-black ">
        <div class="border bg-blue-50 rounded-xl">
            <form class="form">
                <div class=" p-4">
                    <h1 class="text-4xl mb-5">Your Detail</h1>
                    <div class="border rounded-xl bg-gradient-to-r from-blue-400  to-blue-100 px-2 my-2">
                        <h1 class="text-2xl">FullName</h1>
                        <div
                            class="form-group flex  space-x-8 px-3 my-3 border bg-gradient-to-l from-blue-400  to-blue-100 rounded-xl">
                            <span>
                                <label class="text-gray-700 text-xl ">FirstName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="your Name" v-model="StudentData.Name.FirstName"
                                        @blur="v$.StudentData.Name.FirstName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        your name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Name?.FirstName?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">MiddleName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Father Name" v-model="StudentData.Name.MiddleName"
                                        @blur="v$.StudentData.Name.MiddleName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        father name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Name?.MiddleName?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">LastName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="surname" v-model="StudentData.Name.LastName"
                                        @blur="v$.StudentData.Name.LastName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        surname</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Name?.LastName?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border bg-gradient-to-r from-blue-400  to-blue-100 rounded-xl my-2 px-2">
                        <h1 class="text-2xl">Birth Details</h1>
                        <div
                            class="form-group my-3 px-3 flex space-x-8 border rounded-xl bg-gradient-to-l from-blue-400  to-blue-100">
                            <span>
                                <label class="text-gray-700 text-xl ">Date Of Birth : </label>
                                <div class="relative datepicker form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="textbox-n form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="date of birth" v-model="StudentData.Birthdetail.DOB"
                                        @blur="v$.StudentData.Birthdetail.DOB.$touch" onfocus="(this.type='date')" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        birth date</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Birthdetail?.DOB?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Place Of Birth : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="PlaceOfBirth" v-model="StudentData.Birthdetail.PlaceOFBirth"
                                        @blur="v$.StudentData.Birthdetail.PlaceOFBirth.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        birth place</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Birthdetail?.PlaceOFBirth?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border rounded-xl bg-gradient-to-r from-blue-400  to-blue-100 px-2 my-2">
                        <h1 class="text-2xl">Languages</h1>
                        <div
                            class="form-group flex  space-x-8 px-3 border bg-gradient-to-l from-blue-400  to-blue-100  rounded-xl my-3">
                            <span>
                                <label class="text-gray-700 text-xl ">FirstName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Phone" v-model="StudentData.Firstlanguage" 
                                        @blur="v$.StudentData.Firstlanguage.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        your name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Firstlanguage?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border rounded-xl bg-gradient-to-r from-blue-400  to-blue-100 px-2 my-2">
                        <h1 class="text-2xl">Address</h1>
                        <div
                            class="form-group flex  space-x-8 px-3 border rounded-xl bg-gradient-to-l from-blue-400  to-blue-100 my-3">
                            <span>
                                <label class="text-gray-700 text-xl ">City : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="City" v-model="StudentData.Address.City"
                                        @blur="v$.StudentData.Address.City.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        city name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Address?.City?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">State : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="State" v-model="StudentData.Address.State"
                                        @blur="v$.StudentData.Address.State.$touch"  />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        name of state</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Address?.State?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Country : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Country" v-model="StudentData.Address.Country" 
                                        @blur="v$.StudentData.Address.Country.$touch"/>
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        name of Country</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Address?.Country?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">PIN : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="postal code" v-model="StudentData.Address.PIN" 
                                        @blur="v$.StudentData.Address.PIN.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Enter Postal Code here ..
                                    </label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Address?.PIN?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="px-3 form-group">
                    <h1 class="text-4xl">Father Detail</h1>
                    <div class="border  bg-gradient-to-r from-blue-400  to-blue-100 my-2 px-3 rounded-xl">
                        <h1 class="text-2xl">FullName</h1>
                        <div
                            class="form-group flex  space-x-8 px-3 my-3 border rounded-xl  bg-gradient-to-l from-blue-400  to-blue-100">
                            <span>
                                <label class="text-gray-700 text-xl ">FirstName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Father Name" v-model="StudentData.Father.Fullname.FirstName"
                                        @blur="v$.StudentData.Father.Fullname.FirstName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Father Name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Fullname?.FirstName?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">MiddleName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="GrandFather Name" v-model="StudentData.Father.Fullname.MiddleName"
                                        @blur="v$.StudentData.Father.Fullname.MiddleName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        GradFather Name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Fullname?.MiddleName?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">LastName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="surname" v-model="StudentData.Father.Fullname.LastName"
                                        @blur="v$.StudentData.Father.Fullname.LastName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        surname</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Fullname?.LastName?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl">
                        <h1 class="text-2xl">Additional</h1>
                        <div
                            class="flex space-x-8 my-2 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3">
                            <span>
                                <label class="text-gray-700 text-xl ">Education Qualification : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="EducationQualification"
                                        v-model="StudentData.Father.EducationQualification"
                                        @blur="v$.StudentData.Father.EducationQualification.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Father's
                                        qalification</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.EducationQualification?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Profession : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Profession" v-model="StudentData.Father.Profession"
                                        @blur="v$.StudentData.Father.Profession.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Father's
                                        Work</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Profession?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Designation : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Designation" v-model="StudentData.Father.Designation"
                                        @blur="v$.StudentData.Father.Designation.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Father's Post On
                                        Work</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Designation?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl my-2">
                        <h1 class="text-2xl">Contact </h1>
                        <div
                            class="flex space-x-8 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3 my-2">
                            <span>
                                <label class="text-gray?.Name-700 text-xl ">Phone : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Phone" v-model="StudentData.Father.Phone"
                                        @blur="v$.StudentData.Father.Phone.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Phone
                                        No.</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Phone?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Email : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email" v-model="StudentData.Father.Email"
                                        @blur="v$.StudentData.Father.Email.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        ex.
                                        .....@gmail.com</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Father?.Email?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="px-3 form-group">
                    <h1 class="text-4xl">Mother Detail</h1>
                    <div class="border  bg-gradient-to-r from-blue-400  to-blue-100 my-2 px-3 rounded-xl">
                        <h1 class="text-2xl">FullName</h1>
                        <div
                            class="form-group flex  space-x-8 px-3 my-3 border rounded-xl  bg-gradient-to-l from-blue-400  to-blue-100">
                            <span>
                                <label class="text-gray-700 text-xl ">FirstName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Mother Name" v-model="StudentData.Mother.Fullname.FirstName"
                                        @blur="v$.StudentData.Mother.Fullname.FirstName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Mother Name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Fullname?.FirstName?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">MiddleName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Father Name" v-model="StudentData.Mother.Fullname.MiddleName"
                                        @blur="v$.StudentData.Mother.Fullname.MiddleName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Father Name</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Fullname?.MiddleName?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">LastName : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="surname" v-model="StudentData.Mother.Fullname.LastName"
                                        @blur="v$.StudentData.Mother.Fullname.LastName.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        surname</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Fullname?.LastName?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl">
                        <h1 class="text-2xl">Additional</h1>
                        <div
                            class="flex space-x-8 my-2 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3">
                            <span>
                                <label class="text-gray-700 text-xl ">Education Qualification : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="EducationQualification"
                                        v-model="StudentData.Mother.EducationQualification"
                                        @blur="v$.StudentData.Mother.EducationQualification.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Mother's
                                        qalification</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.EducationQualification?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Profession : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Profession" v-model="StudentData.Mother.Profession" 
                                        @blur="v$.StudentData.Mother.Profession.$touch"/>
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Mother's
                                        Work</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Profession?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Designation : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Designation" v-model="StudentData.Mother.Designation"
                                        @blur="v$.StudentData.Mother.Designation.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Mother's Post On
                                        Work</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Designation?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                    <div class="border bg-gradient-to-r from-blue-400 to-blue-100 px-3 rounded-xl my-2">
                        <h1 class="text-2xl">Contact </h1>
                        <div
                            class="flex space-x-8 border bg-gradient-to-l from-blue-400 to-blue-100 rounded-xl px-3 my-2">
                            <span>
                                <label class="text-gray-700 text-xl ">Phone : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Phone" v-model="StudentData.Mother.Phone"
                                        @blur="v$.StudentData.Mother.Phone.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        Phone
                                        No.</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Phone?.$errors"></ErrorVue>
                            </span>
                            <span>
                                <label class="text-gray-700 text-xl ">Email : </label>
                                <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                    <input type="text"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email" v-model="StudentData.Mother.Email"
                                        @blur="v$.StudentData.Mother.Email.$touch" />
                                    <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                        ex.
                                        .....@gmail.com</label>
                                </div>
                                <ErrorVue :errors="v$.StudentData?.Mother?.Email?.$errors"></ErrorVue>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="px-3 my-2 form-group">
                    <h1 class="text-4xl">Emergency</h1>
                    <div class="form-array border rounded-xl bg-gradient-to-r from-blue-400 to-blue-100 px-3 my-2 ">
                        <h1 class="text-2xl capitalize ">contact with phone number</h1>
                        <div v-for="(item, index) in StudentData.EmergencyList">
                            <div :key="index"
                                class="flex space-x-8 border rounded-xl bg-gradient-to-l from-blue-400 to-blue-100 px-3 my-2">
                                <span>
                                    <label class="text-gray-700 text-xl ">Relation : </label>
                                    <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                        <input type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Relation" v-model="item.Relation" />
                                        <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                            relation with person</label>
                                    </div>
                                </span>
                                <span>
                                    <label class="text-gray-700 text-xl ">Phone : </label>
                                    <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                        <input type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Phone Number" v-model="item.Number" />
                                        <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                            contact number</label>
                                    </div>
                                </span>
                                <span v-if="StudentData.EmergencyList.length > 1 && index > 0">
                                    <button class="text-6xl mt-8 content-center"
                                        @click.stop.prevent="DeleteEmergency(index)"><em
                                            class="fa-solid fa-minus"></em></button>
                                </span>
                            </div>
                        </div>
                        <span>
                            <button class="text-4xl" @click.stop.prevent="AddEmergency"><em
                                    class="fa-solid fa-plus"></em></button>
                        </span>
                    </div>
                </div>
                <div class="form-group px-3 my-2">
                    <h1 class="text-4xl">Reference</h1>
                    <div class="form-array border rounded-xl bg-gradient-to-r from-blue-400 to-blue-100 px-3 my-2 ">
                        <h1 class="text-2xl capitalize ">reference with adress and contact number</h1>
                        <div v-for="(item, index) in StudentData.ReferenceList">
                            <div
                                class="form-group flex space-x-8 border rounded-xl bg-gradient-to-l from-blue-400 to-blue-100 px-3 my-2">
                                <span>
                                    <label class="text-gray-700 text-xl ">Address : </label>
                                    <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                        <input type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Address" v-model="item.Address" />
                                        <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                            Address of Person</label>
                                    </div>
                                </span>
                                <span>
                                    <label class="text-gray-700 text-xl ">Phone : </label>
                                    <div class="relative form-floating mb-3 mt-2 xl:w-96">
                                        <input type="number"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Number" v-model="item.Number" />
                                        <label for="floatingInput" class="text-gray-700 text-sm capitalize">
                                            contact number</label>
                                    </div>
                                </span>
                                <span v-if="StudentData.ReferenceList.length > 1 && index > 0">
                                    <button class="text-6xl mt-8 content-center"
                                        @click.stop.prevent="DeleteReference(index)"><em
                                            class="fa-solid fa-minus"></em></button>
                                </span>
                            </div>
                        </div>
                        <span>
                            <button class="text-4xl" @click.stop.prevent="AddReference"><em
                                    class="fa-solid fa-plus"></em></button>
                        </span>
                    </div>
                </div>
            </form>
            <div class="w-fit px-3">
                <button @click.stop.prevent="submitdata(StudentData)" class=" bg-blue-900 text-white text-xl border rounded-xl px-5 my-1">
                    Submit Form
                </button>
                <!-- [ngClass]="[!StudentForm.valid ?'bg-gray-400':'bg-green-400']" -->
            </div>
        </div>
        <div class="bg-gray-100 my-6 px-2">
            <table class="table table-auto border border-collapse">
                <caption class="text-3xl my-3">Student Data </caption>
                <thead>
                    <tr class=" bg-gray-400">
                        <th class="border border-black p-2">Name</th>
                        <th class="border border-black p-2">Birth Date</th>
                        <th class="border border-black p-2">Place Of Birth</th>
                        <th class="border border-black p-2">First Language</th>
                        <th class="border border-black p-2">Address</th>
                        <th class="border border-black p-2">Emergency </th>
                        <th class="border border-black p-2">Reference</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border border-black " v-if="finalData.length < 1">
                        <td colspan="21" class="text-center capitalize"> there is no Data to show</td>
                    </tr>
                    <tr v-else class="even:bg-gray-200" v-for="item of finalData">
                        <td class="border border-black p-1">
                            {{ item?.Name?.FirstName }}&nbsp; {{ item?.Name?.MiddleName }} &nbsp; {{ item?.Name?.LastName }}
                        </td>
                        <td class="border border-black p-1">{{ item.Birthdetail.DOB }}</td>
                        <td class="border border-black p-1">{{ item.Birthdetail.PlaceOFBirth }}</td>
                        <td class="border border-black p-1">
                            {{ item.Firstlanguage }}</td>
                        <td class="border border-black p-1">
                            {{ item.Address.city }} &nbsp;{{ item.Address.State }} &nbsp; {{ item.Address.Country }}
                            &nbsp;{{ item.Address.PIN }}
                        </td>

                        <td class="border border-black p-1">{{ item.EmergencyList }}</td>
                        <td class="border border-black p-1">{{ item.ReferenceList }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="bg-gray-100 my-6 px-2">
            <table class="table table-auto border border-collapse">
                <caption class="text-3xl my-3">Father's Details </caption>
                <thead>
                    <tr class=" bg-gray-400">
                        <th class="border border-black p-2">Name</th>
                        <th class="border border-black p-2">Education Qualification</th>
                        <th class="border border-black p-2">Work</th>
                        <th class="border border-black p-2">Designation At Work</th>
                        <th class="border border-black p-2">Email</th>
                        <th class="border border-black p-2">Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border border-black " v-if="finalData.length < 1">
                        <td colspan="21" class="text-center capitalize"> there is no Data to show</td>
                    </tr>
                    <tr v-else class="even:bg-gray-200" v-for="item of finalData">
                        <td class="border border-black p-1">
                            {{ item.Father.Fullname.FirstName }}&nbsp; {{ item.Father.Fullname.MiddleName }} &nbsp;{{
                                    item.Father.Fullname.LastName
                            }}</td>
                        <td class="border border-black p-1">{{ item.Father.EducationQualification }}</td>
                        <td class="border border-black p-1">{{ item.Father.Profession }}</td>
                        <td class="border border-black p-1">{{ item.Father.Designation }}</td>
                        <td class="border border-black p-1">{{ item.Father.Email }}</td>
                        <td class="border border-black p-1">{{ item.Father.Phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="bg-gray-100 my-6 px-2">
            <table class="table table-auto border border-collapse">
                <caption class="text-3xl my-3">Mother's Details </caption>
                <thead>
                    <tr class=" bg-gray-400">
                        <th class="border border-black p-2">Name</th>
                        <th class="border border-black p-2">Education Qualification</th>
                        <th class="border border-black p-2">Work</th>
                        <th class="border border-black p-2">Designation At Work</th>
                        <th class="border border-black p-2">Email</th>
                        <th class="border border-black p-2">Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border border-black " v-if="finalData.length < 1">
                        <td colspan="21" class="text-center capitalize"> there is no Data to show</td>
                    </tr>
                    <tr v-else class="even:bg-gray-200" v-for="item of finalData">
                        <td class="border border-black p-1">
                            {{ item.Mother.Fullname.FirstName }}&nbsp; {{ item.Mother.Fullname.MiddleName }} &nbsp;{{
                                    item.Mother.Fullname.LastName
                            }}</td>
                        <td class="border border-black p-1">{{ item.Mother.EducationQualification }}</td>
                        <td class="border border-black p-1">{{ item.Mother.Profession }}</td>
                        <td class="border border-black p-1">{{ item.Mother.Designation }}</td>
                        <td class="border border-black p-1">{{ item.Mother.Email }}</td>
                        <td class="border border-black p-1">{{ item.Mother.Phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, alpha, numeric, email, alphaNum, minLength, maxLength } from '@vuelidate/validators'
import ErrorVue from './Error.vue'
export default {
    setup() {
        return { v$: useVuelidate() }
    },
    components: {
        ErrorVue,
    },
    data() {
        return {
            finalData: [],
            StudentData: {
                Name: {
                    FirstName: '',
                    MiddleName: '',
                    LastName: ''
                },
                Birthdetail: {
                    DOB: '',
                    PlaceOFBirth: ''
                },
                Firstlanguage: '',
                Address: {
                    City: '',
                    State: '',
                    Country: '',
                    PIN: ''
                },
                Father: {
                    Fullname: {
                        FirstName: '',
                        MiddleName: '',
                        LastName: ''
                    },
                    Email: '',
                    EducationQualification: '',
                    Profession: '',
                    Designation: '',
                    Phone: ''
                },
                Mother: {
                    Fullname: {
                        FirstName: '',
                        MiddleName: '',
                        LastName: ''
                    },
                    Email: '',
                    EducationQualification: '',
                    Profession: '',
                    Designation: '',
                    Phone: ''
                },
                EmergencyList: [
                    {
                        Relation: '',
                        Number: ''
                    }
                ],
                ReferenceList: [
                    {
                        Address: '',
                        Number: ''
                    }
                ]
            }
        }
    },
    methods: {
        DeleteEmergency(i) {
            this.StudentData.EmergencyList.splice(i, 1);
        },
        AddEmergency: function () {
            this.StudentData.EmergencyList.push(
                {
                    Relation: '',
                    Number: ''
                }
            );
        },
        AddReference: function () {
            this.StudentData.ReferenceList.push(
                {
                    Address: '',
                    Number: ''
                }
            )
        },
        DeleteReference(i) {
            this.StudentData.ReferenceList.splice(i, 1)
        },
        async submitdata(data) {
            const validatedata = await this.v$.$validate()
            if (!validatedata) return;
            else { this.finalData.push(data); console.log(this.finalData) }
        }
    },
    validations() {
        return {
            StudentData: {
                Name: {
                    FirstName: { required, alpha, minLength: minLength(3) },
                    MiddleName: { required, alpha },
                    LastName: { required, alpha }
                },
                Birthdetail: {
                    DOB: { required },
                    PlaceOFBirth: { alpha }
                },
                Firstlanguage: { alpha },
                Address: {
                    City: { alpha },
                    State: { alpha },
                    Country: { alpha },
                    PIN: { numeric, minLength: minLength(6), maxLength: maxLength(6) }
                },
                Father: {
                    Fullname: {
                        FirstName: { required, alpha, minLength: minLength(3) },
                        MiddleName: { required, alpha },
                        LastName: { required, alpha }
                    },
                    Email: { email },
                    EducationQualification: { alphaNum },
                    Profession: { alpha },
                    Designation: { alpha },
                    Phone: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) }

                },
                Mother: {
                    Fullname: {
                        FirstName: { required, alpha },
                        MiddleName: { required, alpha },
                        LastName: { required, alpha }
                    },
                    Email: { email },
                    EducationQualification: { alphaNum },
                    Profession: { alpha },
                    Designation: { alpha },
                    Phone: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) }
                }
            }
        }
    }
}
</script>