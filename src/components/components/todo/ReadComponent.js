import React, { useEffect, useState } from 'react';
import { getOne } from '../../../api/todoApi';
import useCustomMove from '../../../hooks/UseCustomMove';

const initState = {
    tno: 0,
    title: '',
    writer: 'user00',
    dueDate: '',
    complete: false
};

const makediv = (title, value) => (
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{value}</div>
        </div>
    </div>
);

function ReadComponent({ tno }) {
    const [todo, setTodo] = useState(initState);
    const { moveToList } = useCustomMove();

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data);
            setTodo(data);
        });
    }, [tno]);

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {makediv('Tno', todo.tno)}
            {makediv('Writer', todo.writer)}
            {makediv('Title', todo.title)}
            {makediv('Due Date', todo.dueDate)}
            {makediv('Complete', todo.complete ? 'Completed' : 'Not Yet')}
            <div className="flex justify-end p-4">
                <button
                    type="button"
                    className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                    onClick={moveToList} // 수정된 부분
                >
                    List
                </button>
            </div>
        </div>
    );
}

export default ReadComponent;
