import { useState, useEffect } from "react";
import { carriesCategories } from "../src/screens/home/services/LoadData";

export default function useCategories()
{
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const ret = carriesCategories();
        setTitle(ret.title);
        setList(ret.list);
    }, []);



    return [title, list]
}


