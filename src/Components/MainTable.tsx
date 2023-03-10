import React, {useEffect, useState, FC} from 'react';
import TableBottomPane from './TableBottomPane';
import TableTopPane from './TableTopPane';
import SingleElement from './SingleElement';

interface DisplayData {
  color?: number;
  email: string;
  index: number;
  lastLogin: string;
  name: string;
  role: string;
  status: string;
}

const MainTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [currentData, setCurrentData] = useState<DisplayData[]>([]);
  const [sampledata, setSampleData] = useState<DisplayData[]>([
    {
      name: 'Phoenix Baker 1',
      email: 'phoenix@usetrinity.com',
      status: 'Active',
      role: 'Admin',
      lastLogin: 'Jun 20, 2022',
      index: 0,
    },
    {
      name: 'Lana Baker 2',
      email: 'Lana@usetrinity.com',
      status: 'Invited',
      role: 'Sales Leader',
      lastLogin: 'Jun 20, 2022',
      index: 1,
    },
    {
      name: 'Phoenix Baker 3',
      email: 'phoenix@usetrinity.com',
      status: 'Active',
      role: 'Admin',
      lastLogin: 'Jun 20, 2022',
      index: 2,
    },
    {
      name: 'Lana Baker 4',
      email: 'Lana@usetrinity.com',
      status: 'Invited',
      role: 'Sales Leader',
      lastLogin: 'Jun 20, 2022',
      index: 3,
    },
    {
      name: 'Lana Baker 5',
      email: 'Lana@usetrinity.com',
      status: 'Invited',
      role: 'Sales Leader',
      lastLogin: 'Jun 20, 2022',
      index: 4,
    },
    {
      name: 'Phoenix Baker 6',
      email: 'phoenix@usetrinity.com',
      status: 'Active',
      role: 'Admin',
      lastLogin: 'Jun 20, 2022',
      index: 5,
    },
    {
      name: 'Lana Baker 7',
      email: 'Lana@usetrinity.com',
      status: 'Invited',
      role: 'Sales Leader',
      lastLogin: 'Jun 20, 2022',
      index: 6,
    },
    {
      name: 'Lana Baker 8',
      email: 'Lana@usetrinity.com',
      status: 'Invited',
      role: 'Sales Leader',
      lastLogin: 'Jun 20, 2022',
      index: 7,
    },
  ]);

  useEffect(() => {
    const tempData = sampledata.filter((item, index) => {
      if (index >= page * 5 && index < page * 5 + 5) {
        item.color = index;
        return item;
      }
    });
    console.log(tempData);
    setCurrentData(tempData);
  }, [page, sampledata]);

  return (
    <div className="h-full w-full bg-white rounded-md drop-shadow-md outline outline-2 outline-neutral-200 flex flex-col divide-y-2 justify-between">
      <div>
        <TableTopPane
          setSampleData={setSampleData}
          sampledata={sampledata}
          lastIndex={sampledata[sampledata.length - 1].index}
        />
        <div className="">
          {currentData.map(item => {
            return (
              <SingleElement
                data={item}
                sampledata={sampledata}
                setSampleData={setSampleData}
              />
            );
          })}
        </div>
      </div>
      <TableBottomPane
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(sampledata.length / 5) - 1}
      />
    </div>
  );
};

export default MainTable;
