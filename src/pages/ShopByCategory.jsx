import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CategoryToyDetails from './CategoryToyDetails';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    console.log(toys)
    const [activeTab, setActiveTab] = useState("cat")


    useEffect(() => {
        fetch(`http://localhost:5000/category-toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])


    const handeleTabClick = (tabName) => {
        setActiveTab(tabName)
    }


    return (
        <div className='text-center my-20'>
            <Tabs>
                <TabList className='flex gap-5 justify-center mb-5'>
                    <Tab onClick={() => handeleTabClick('cat')} className={`text-2xl p-2 rounded-lg ${activeTab == 'cat' ? 'bg-red-400 text-white font-bold' : ''} `}> Tab 1</Tab>

                    <Tab onClick={() => handeleTabClick('dog')} className={`text-2xl p-2 rounded-lg ${activeTab == 'dog' ? 'bg-red-400 text-white font-bold' : ''} `}>Tab 2</Tab>

                    <Tab onClick={() => handeleTabClick('dinosaur')} className={`text-2xl p-2 rounded-lg  ${activeTab == 'dinosaur' ? 'bg-red-400 text-white font-bold' : ''} `}>Tab 3</Tab>
                </TabList>

                <TabPanel className='grid md:grid-cols-3 mx-5 gap-10'>
                    {
                        toys?.map(toy => <CategoryToyDetails key={toy._id} toy={toy}></CategoryToyDetails>)
                    }
                </TabPanel>

                <TabPanel className='grid md:grid-cols-3 mx-5 gap-10'>
                    {
                        toys?.map(toy => <CategoryToyDetails key={toy._id} toy={toy}></CategoryToyDetails>)
                    }
                </TabPanel>

                <TabPanel className='grid md:grid-cols-3 mx-5 gap-10'>
                    {
                        toys?.map(toy => <CategoryToyDetails key={toy._id} toy={toy}></CategoryToyDetails>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;