'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import getUser from '@/utils/getUserClientSide';
const DateFilter = ({ payLoad }: any) => {
  const user: any = getUser();
  const router = useRouter();
  const url = usePathname();


  const handleDate = (e: { target: { value: any } }) => {
    const dateValue = e.target.value;
    user.role === 'Admin'?
    router.push(`${url}/?departmentId=${payLoad.departmentId}&startDate=${payLoad.startDate}&endDate=${payLoad.endDate}&date=${dateValue}&month=${payLoad.selectedMonth}`)
    :router.push(`${url}/?startDate=${payLoad.startDate}&endDate=${payLoad.endDate}&date=${dateValue}&month=${payLoad.selectedMonth}`);
  };

  return (
    <>
      <div className='align-items-end d-flex gap-x-2 selectbox'>
        <div className='input-group date-selectbox'>
          <input
            type='date'
            className='form-control'
            value={payLoad.filterByDate}
            onChange={handleDate}
          />
        </div>
      </div>
    </>
  );
};

export default DateFilter;
