
import { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-slider';
import Select from 'react-select';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { BsPlusSquare } from 'react-icons/bs';
// import RangeSlider from 'react-range-slider';
// import 'react-range-slider/lib/index.css';

const MIN = 10;
const MAX = 100000;





// multi select section
const product = [
  { value: 'In Stock', label: 'In Stock' },
  { value: 'Pre Order', label: 'Pre Order' },
  { value: 'Out Of Stock', label: 'Out Of Stock' },
];
const varient = [
  { value: 'Simple Product', label: 'Simple Product' },
  { value: 'Variable Product', label: 'Variable Product' },
  { value: 'Bundle Product', label: 'Bundle Product' },
];
const brand = [
  { value: 'Aarong', label: 'Aarong' },
  { value: 'Amazon', label: 'Amazon' },
  { value: 'Lulu', label: 'Lulu' },
  { value: 'Ebay', label: 'Ebay' },
  { value: 'Walmart', label: 'Walmart' },
  { value: 'Gigabyte', label: 'Gigabyte' },
  { value: 'Asus', label: 'Asus' },
  { value: 'Samsung', label: 'Samsung' },
  { value: 'MI', label: 'MI' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Datapas', label: 'Datapas' },
  { value: 'Dove', label: 'Dove' },
  { value: 'Costa', label: 'Costa' },
  { value: 'Boogati', label: 'Boogati' },
];
const category = [
  { value: 'Aarong', label: 'Mobile' },
  { value: 'Amazon', label: 'Home Applicants' },
  { value: 'Lulu', label: 'Fashion' },
  { value: 'Ebay', label: 'Games' },
  { value: 'Walmart', label: 'Laptop' },
  { value: 'Gigabyte', label: 'Electronics' },
  { value: 'Asus', label: 'Sports' },
  { value: 'Samsung', label: 'Health & Beauty' },
  { value: 'MI', label: 'Toys' },
  { value: 'Apple', label: 'Clothing' },
  { value: 'Datapas', label: 'Speaker and Headset' },
  { value: 'Dove', label: 'Lawn and Garden' },
  { value: 'Costa', label: 'Bedding and Bath' },
];
const storage = [
  { value: '32', label: '32' },
  { value: '34', label: '34' },
  { value: '36', label: '36' },
  { value: '38', label: '38' },
  { value: '40', label: '40' },
  { value: '42', label: '42' },
  { value: '44', label: '44' },
  { value: '50', label: '50' },
];
const color = [
  { value: 'Silver', label: 'Silver' },
  { value: 'Orange', label: 'Orange' },
  { value: 'Gold', label: 'Gold' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Black', label: 'Black' },
  { value: 'Pink', label: 'Pink' },
  { value: 'Gray', label: 'Gray' },
  { value: 'Olive', label: 'Olive' },
  { value: 'Brawn', label: 'Brawn' },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVarient, setSelectedVarient] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);



  // Price range section
  const [values, setValues] = useState([MIN, MAX])
  // end


  // radio section
  const [selectedRadio, setSelectedRadio] = useState('all'); // Default selection

  const handleClearButtonClick = () => {
    setSelectedRadio('all'); // Set the default selection when Clear is clicked
  };
  // end


  // rating section start
  // const a = 1;
  // const b = 5;

  // const [ratings, setRatings] = useState([a, b]);
  // const [rating, setRating] = useState(0);

  // rating section end



  // rating section start
  const a = 1;
  const b = 5;

  const [ratings, setRatings] = useState([a, b]);
  const [rating, setRating] = useState(0);

  const handleSliderChange = (newRatings) => {
    // Assuming the slider's value is an array with two elements [min, max]
    const [min, max] = newRatings;

    // Calculate the new rating value based on the slider's value
    const newRating = Math.max(min, Math.min(max, rating));

    // Update the rating state
    setRating(newRating);

    // Update the ratings state
    setRatings(newRatings);
  };
  // rating section end




  return (
    <>
      <div className="pl-12">
        <div>
          {/* section start */}
          <div>
            {/* dropdown section start */}
            <div className="collapse bg-transparent w-1/3">
              <input type="checkbox" />
              <div className="collapse-title text-2xl font-bold pl-0">
                Categories
              </div>
              <div className="collapse-content">
                <ul className="pl-8 menu dropdown-content z-[1] rounded-box w-96 font-medium text-xl">
                  <li><a><BsPlusSquare /><span>Mobile</span></a></li>
                  <li><a><BsPlusSquare /><span>Home Applicants</span></a></li>
                  <li><a><BsPlusSquare /><span>Laptop</span></a></li>
                  <li><a><BsPlusSquare /><span>Fashion</span></a></li>
                  <li><a><BsPlusSquare /><span>Games</span></a></li>
                  <li><a><BsPlusSquare /><span>Electronics</span></a></li>
                  <li><a><BsPlusSquare /><span>Sports</span></a></li>
                  <li><a><BsPlusSquare /><span>Health & Beauty</span></a></li>
                  <li><a><BsPlusSquare /><span>Toys</span></a></li>
                  <li><a><BsPlusSquare /><span>Clothings</span></a></li>
                  <li><a><BsPlusSquare /><span>Speakers</span></a></li>
                </ul>

              </div>
            </div>
            {/* dropdown section end*/}
            <div>
              <div className='flex items-center justify-between w-96'>
                <h2 className='text-2xl font-medium'>Product type</h2>
                <button onClick={handleClearButtonClick}>Clear</button>
              </div>
              <div className='pt-8 pl-10'>
                <div className='flex items-center'>
                  <h2 className='pr-2 text-lg mb-4'>All Type</h2>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio mb-4"
                    checked={selectedRadio === 'all'}
                    onChange={() => setSelectedRadio('all')}
                  />
                </div>
                <div className='flex items-center'>
                  <h2 className='pr-2 text-lg mb-4'>Physical Product</h2>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio mb-4"
                    checked={selectedRadio === 'physical'}
                    onChange={() => setSelectedRadio('physical')}
                  />
                </div>
                <div className='flex items-center'>
                  <h2 className='pr-2 text-lg'>Digital Product</h2>
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    checked={selectedRadio === 'digital'}
                    onChange={() => setSelectedRadio('digital')}
                  />
                </div>
              </div>
            </div>
            {/* radio section end */}
          </div>


          <div>
            {/* Price range start */}
            <div className='my-16'>
              <h2 className='text-2xl font-medium'>Price Range</h2>
              <div className='my-16 pl-4'>
                <Slider className='slider' onChange={setValues} value={values} min={MIN} max={MAX} />
              </div>
            </div>


            <div className='flex gap-8 mt-8'>
              <div className='relative flex items-center'>
                <div className='price border rounded-lg h-[80px] w-[130px] flex items-center'>
                  <span className='value text-xl pl-4'>{values[0]}</span>
                </div>
                <h2 className='absolute top-0 left-0 transform -translate-y-1/2 translate-x-3 text-lg font-bold bg-white'>
                  Min Price
                </h2>
              </div>
              <div className='flex justify-center items-center h-[80px] w-[60px]'>
                <p>--</p>
              </div>
              <div className='relative flex items-center'>
                <div className='price border rounded-lg h-[80px] w-[130px] flex items-center'>
                  <span className='value text-xl pl-4'>{values[1]}</span>
                </div>
                <h2 className='absolute top-0 left-0 transform -translate-y-1/2 translate-x-3 text-lg font-bold bg-white'>
                  Max Price
                </h2>
              </div>
            </div>
            {/* Price range end */}
          </div>









          {/* rating */}
          <div className='my-16'>
            <h2 className='text-2xl font-medium'>Rating</h2>
            <div className='mt-12 pl-28'>
              {/* Your Rating component */}
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
            </div>
            <div className='my-16 pl-4'>
              {/* Your Slider component */}
              <Slider
                className='slider'
                onChange={handleSliderChange}
                value={ratings}
                min={a}
                max={b}
              />
            </div>
          </div>
          {/* rating */}










          {/* rating */}
          {/* <div className='my-16'>
            <h2 className='text-2xl font-medium'>Rating</h2>
            <div className='mt-12 pl-28'>
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />

            </div>
            <div className='my-16 pl-4'>
              <Slider className='slider' onChange={setRatings} value={ratings} min={a} max={b} />
            </div>
          </div> */}
          {/* rating */}











          {/* select bar start */}
          <div className='mt-16'>
            <h2 className='text-2xl font-medium mb-8'>Product Status</h2>
            <Select className='w-[25%]'
              defaultValue={selectedProduct}
              onChange={setSelectedProduct}
              options={product}
              isMulti
            />
          </div>
          {/* select bar end */}
          {/* select bar start */}
          <div className='mt-16'>
            <h2 className='text-2xl font-medium mb-8'>Varient</h2>
            <Select className='w-[25%]'
              defaultValue={selectedVarient}
              onChange={setSelectedVarient}
              options={varient}
              isMulti
            />
          </div>
          {/* select bar end */}
          {/* select bar start */}
          <div className='mt-16'>
            <h2 className='text-2xl font-medium mb-8'>Brand</h2>
            <Select className='w-[25%]'
              defaultValue={selectedBrand}
              onChange={setSelectedBrand}
              options={brand}
              isMulti
            />
          </div>
          {/* select bar end */}
          {/* select bar start */}
          <div className='mt-16'>
            <h2 className='text-2xl font-medium mb-8'>Category</h2>
            <Select className='w-[25%]'
              defaultValue={selectedCategory}
              onChange={setSelectedCategory}
              options={category}
              isMulti
            />
          </div>
          {/* select bar end */}
          {/* select bar start */}
          <div className='mt-16'>
            <h2 className='text-2xl font-medium mb-8'>Storage Size</h2>
            <Select className='w-[25%]'
              defaultValue={selectedStorage}
              onChange={setSelectedStorage}
              options={storage}
              isMulti
            />
          </div>
          {/* select bar end */}
          {/* select bar start */}
          <div className='mt-16'>
            <h2 className='text-2xl font-medium mb-8'>Color</h2>
            <Select className='w-[25%]'
              defaultValue={selectedColor}
              onChange={setSelectedColor}
              options={color}
              isMulti
            />
          </div>
          {/* select bar end */}

          {/* card section */}

          <div className="card w-[360px] mb-8 mt-14 bg-blue-900 shadow-xl">
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">Get More Done <br />
                Together With US</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, modi.</p>
              <div className="card-actions">
                <button className="btn btn-primary mt-4">Get Started</button>
              </div>
            </div>
          </div>






          {/* section end */}
        </div>
      </div>


    </>
  );
}

export default App;
