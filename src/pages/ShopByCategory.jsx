import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CategoryToyDetails from './CategoryToyDetails';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    console.log(toys)
    const [activeTab, setActiveTab] = useState("dinosaur")


    useEffect(() => {
        fetch(`https://assignment-11-server-zeta-puce.vercel.app/category-toys/${activeTab}`)
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
            <h2 className='text-3xl font-bold text-center mb-10'>Sub Categories</h2>
            <Tabs>
                <TabList className='flex gap-5 justify-center mb-5'>
                    <Tab onClick={() => handeleTabClick('dinosaur')} className={`text-2xl p-2 rounded-lg cursor-pointer ${activeTab == 'dinosaur' ? 'bg-red-400 text-white font-bold' : ''} `}>Tab 1</Tab>

                    <Tab onClick={() => handeleTabClick('cat')} className={`text-2xl p-2 rounded-lg cursor-pointer ${activeTab == 'cat' ? 'bg-red-400 text-white font-bold' : ''} `}> Tab 2</Tab>

                    <Tab onClick={() => handeleTabClick('dog')} className={`text-2xl p-2 rounded-lg cursor-pointer ${activeTab == 'dog' ? 'bg-red-400 text-white font-bold' : ''} `}>Tab 3</Tab>
                </TabList>


                <TabPanel >
                    <h2 className='text-2xl text-center font-semibold mb-5'>Dinosaur</h2>
                    <div className='grid md:grid-cols-3 mx-5 gap-10'>
                        {
                            toys?.map(toy => <CategoryToyDetails key={toy._id} toy={toy}></CategoryToyDetails>)
                        }
                    </div>
                </TabPanel>

                <TabPanel >
                    <h2 className='text-2xl text-center font-semibold mb-5'>Cat</h2>
                    <div className='grid md:grid-cols-3 mx-5 gap-10'>
                        {
                            toys?.map(toy => <CategoryToyDetails key={toy._id} toy={toy}></CategoryToyDetails>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2 className='text-2xl text-center font-semibold mb-5'>Dog</h2>
                    <div className='grid md:grid-cols-3 mx-5 gap-10'>
                        {
                            toys?.map(toy => <CategoryToyDetails key={toy._id} toy={toy}></CategoryToyDetails>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;