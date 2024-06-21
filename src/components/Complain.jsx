

const Complain = () => {
    return (
        <div className="px-1 md:px-[20px] lg:px-[70px]">
            <div className="text-center mb-8">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="text-4xl font-semibold font-Poppins text-[#3b4144]">Frequently ask question</h1>
                <p data-aos="fade-down" data-aos-duration="1200" className="font-medium font-Poppins text-[#3b4144CC] w-[90vw] lg:w-[60vw] mx-auto mt-4">Here we have kept a section so that you can contact with us for the purpose of asking us your valuable question. we are very concern about your question. and honestly we are very excited to make sure that you can get your answer</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
                {/* left side */}
                <div className="flex flex-col justify center">
                    <h1 data-aos="zoom-in" data-aos-duration="1400" className="text-2xl text-[#3b4144CC] font-semibold font-Poppins text-center"> Answer of popular questions</h1>
                    <div  data-aos="fade-left" data-aos-duration="2200" className="join join-vertical w-[90vw] lg:w-[40vw] mt-4 mx-auto">

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Is your organization works only for residence Real State?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>No, we have some other options such, hospitality and hotel, industrial sector, farming sector, public and govment sector</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Is your organization only works in America?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Yes , our working area is limited in America. But we are going to start our business outside USA very soon.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Is there any option to pay the amount in instalment or loan? </h1>
                            </div>
                            <div className="collapse-content">
                                <p>Yes we have an option. from where you can pay us in instalment. but you have to pay it only five instalment.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Are you a developer?
                            </div>
                            <div className="collapse-content">
                                <p>Yes , in agreement we do a developer job, where we dimolish old house and recreat new one</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Have you any seasonal discount?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>No we have no seasonal discount. But we have a discount for the physically disabled person, and is is done by our charity section.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* right side */}
                <div>
                    <div className="text-center">
                        <h1 data-aos="zoom-out" data-aos-duration="1600" className="text-2xl text-[#3b4144CC] font-semibold font-Poppins">Complain Here</h1>
                        <p data-aos="zoom-in" data-aos-duration="1800" className="font-medium font-Poppins text-[#3b4144CC] w-[90vw] lg:w-[40vw] mx-auto ">complain here without signUp or login. just submit here your Name, email and drop your complain . dont forget to send your feedback</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="w-[90vw] lg:w-[40vw] mx-auto shadow-2xl bg-base-100 mt-3">
                        <form>
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                            <input type="text" placeholder="your complain" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                            <input type="text" placeholder="Your feedback" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#006aff] text-white hover:bg-black font-Poppins font-medium">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complain;
