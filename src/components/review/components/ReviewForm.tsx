import React from 'react'


interface ReviewFormProps {
    handleSubmit: () => any,
    refText: React.MutableRefObject<any>,
    label: string,
    value: string,
}


const ReviewForm: React.FC<ReviewFormProps> = ({handleSubmit, refText, label, value}) => {
    return (
        <form action="" className='w-full'>
            <div className="col-span-full space-y-4">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                    {label}
                </label>
                <div className="mt-2">
                    <textarea
                        id="about"
                        name="about"
                        rows={5}
                        ref={refText}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                        defaultValue={value}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ReviewForm