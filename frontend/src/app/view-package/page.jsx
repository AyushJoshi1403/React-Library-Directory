import React from 'react'

const ViewPackage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">

          {/* content - start */}
          <div className="md:py-8">
            {/* name - start */}
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-700">Title</span>
              <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                packageName
              </h1>
            </div>
            {/* name - end */}

            {/* body - start */}
            <div className=''>
              <div className=''>
                <h3 className="text-xl text-gray-700 lg:text-xl">
                  version
                </h3>
                <h3 className="text-xl text-gray-700 lg:text-xl">
                  lastPublished
                </h3>
                <h3 className="text-xl text-gray-700 lg:text-xl">
                  difficulty
                </h3>
                <h3 className="text-xl text-gray-700 lg:text-xl">
                  downloads
                </h3>
                <h3 className="text-xl text-gray-700 lg:text-xl">
                  publishedBy
                </h3>
                <h3 className="text-xl text-gray-700 lg:text-xl">
                  link
                </h3>
              </div>
            </div>
            {/* body - end */}
          </div>
          {/* content - end */}
        </div>
      </div>
    </div>
  )
}

export default ViewPackage;