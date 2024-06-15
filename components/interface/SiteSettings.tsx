"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useSettings } from "@/context/SettingsProvider";

interface IFormInput {
    title: string;
    desc: string;
    logo: string;
    keywords: string;
    status: boolean;
}

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    desc: yup.string().required('Description is required'),
    logo: yup.string().url('Logo must be a valid URL').required('Logo URL is required'),
    keywords: yup.string().required('Keywords are required'),
    status: yup.boolean().required('Status is required'),
});

export default function SiteSettings() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        console.log(data)
    }

    const settings: any = useSettings();
    const setting = settings.data
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input type="text" {...register("title")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={setting.website.title} />
                {errors.title && <p className="mt-2 text-red-500">{errors.title.message}</p>}
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <input type="text" {...register("desc")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={setting.website.desc} />
                {errors.desc && <p className="mt-2 text-red-500">{errors.desc.message}</p>}
            </div>
            
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Logo URL</label>
                <input type="text" {...register("logo")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={setting.website.logo} />
                {errors.logo && <p className="mt-2 text-red-500">{errors.logo.message}</p>}
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Keywords</label>
                <input type="text" {...register("keywords")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={setting.website.keywords} />
                {errors.keywords && <p className="mt-2 text-red-500">{errors.keywords.message}</p>}
            </div>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>

    
  )
}
