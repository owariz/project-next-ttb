"use client";

import React, { useState } from 'react';

interface ReportProps {
  onClose: () => void;
}

export default function Report({ onClose }: ReportProps) {
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [from, setFrom] = useState('FullTect');
  const [bucketKey, setBucketKey] = useState('a9f00191-5799-4028-9ad4-69ed6d1228be');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      const data = {
        title,
        problem,
        from,
        bucket_key: bucketKey,
      };

      formData.append('body', JSON.stringify(data));

      const response = await fetch('https://unilibs.vercel.app/api/report/log&upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.isError) {
        setError(result.message);
      } else {
        onClose();
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="fixed w-full h-full z-50 inset-0 flex backdrop-blur-sm variz_fadeIn">
      <div className="m-auto">
        <div className="relative w-[90vw] sm:w-[450px] rounded-lg shadow-lg overflow-hidden variz_zoomInBlur p-6 bg-black">
          <button
            type="button"
            className="absolute right-4 top-4 bg-gray-800 text-green-400 w-[35px] h-[35px] rounded-lg transition ease-in hover:bg-gray-900"
            onClick={onClose}
          >
            <i className="far fa-times"></i>
          </button>
          <div className="text-center mb-6">
            <h1 className="font-thai text-2xl font-semibold text-green-400">แจ้งปัญหาที่พบเจอได้ที่นี้</h1>
          </div>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto">
              <div>
                <p className="text-xs text-gray-400 mb-1">หัวข้อ</p>
                <input
                  type="text"
                  name="title"
                  className="w-full px-4 py-2 text-white bg-white/10 rounded-md outline-none"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">ปัญหาที่พบ</p>
                <textarea
                  name="problem"
                  className="w-full px-4 py-2 text-white bg-white/10 rounded-md outline-none"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  required
                  rows={5}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-green-600 to-emerald-500 px-4 py-2 text-lg font-semibold text-white rounded-md shadow-md transition ease-in hover:scale-[1.025] hover:shadow-lg hover:shadow-green-400/40"
            >
              Report!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}