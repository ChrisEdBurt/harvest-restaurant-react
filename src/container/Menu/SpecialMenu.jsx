import React from 'react';

import { data, images } from '../../constants';
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => (
  <div className='app_specialMenu flex__center section__padding' id='menu'>
    <div className='app_specialMenu-title'>
      <SubHeading title='Menu that fits your pallete' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app_specialMenu-menu'>
      <div className='app_specialMenu-menu_wine flex__center'>
        <p className='app_specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app_specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className='app_specialMenu-menu_img'>
        <img src={images.menu} alt='menu' />
      </div>
      <div className='app_specialMenu-menu_cocktail flex__center'>
        <p className='app_specialMenu-menu_heading'>Cocktails</p>
        <div className='app_specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button' onClick={() => {}}>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
