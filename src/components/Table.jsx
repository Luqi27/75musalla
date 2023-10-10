import React from 'react'

const Table = () => {
  return (
    <div name='Table'>
      <div>
        <div className='pt-14 sm:pt-20 pb-9 sm:pb-14 px-10'>
          <div className='text-center pace-y-3 text-lg font-bold tracking-tight text-black sm:text-xl'>
            <h1>"Whoever attends Isha (prayer) in congregation, then he has (the reward as if he had) stood half of the night. And whoever prays Isha and Fajr in congregation, then he has (the reward as if he had) spend the entire night standing (in prayer)."</h1>
            <div className='pt-5'>
              <a href='https://sunnah.com/tirmidhi:221' target='_blank' className='border-t-2 border-orange-400 font-mono text-base sm:text-lg'>Tirmidhi</a>
            </div>
          </div>
        </div>
      </div>


      <div className='pb-20'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-semibold flex items-center justify-center'>
                <thead className='border-b text-orange-400 dark:border-neutral-500 '>
                  <tr>
                    <th scope='col' className='px-6 py-4'>Salah</th>
                    <th scope='col' className='px-6 py-4'>IQAMA</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>FAJR</th>
                    <th scope='col' className='px-6 py-4'>6:15</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>ZHUR</th>
                    <th scope='col' className='px-6 py-4'>2:00</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>ASR</th>
                    <th scope='col' className='px-6 py-4'>6:30</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>MAGHRIB</th>
                    <th scope='col' className='px-6 py-4'>SUNSET</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>ISHA</th>
                    <th scope='col' className='px-6 py-4'>8:20</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>1 JUMA</th>
                    <th scope='col' className='px-6 py-4'>2:05</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 sm-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='text-sm md:text-lg lg:text-xl font-light flex items-center justify-center'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>2 JUMA</th>
                    <th scope='col' className='px-6 py-4'>3:15</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>

      </div>

    </div>
    
  )
}

export default Table