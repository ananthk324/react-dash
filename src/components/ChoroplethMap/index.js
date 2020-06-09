import React, { useState, useEffect, } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import UsaJson from '../../constants/Usa.topo.json';
import MapZoomButtons from './MapZoomButtons';
import './ChoroplethMap.css';

const ChoroplethMap = () => {

    const [data, setData] = useState([]);
    const [tooltipContent, setTooltipContent] = useState('');
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const getData = async () => {
          let response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
          setData(response.data);
        }
        getData();
        return;
    }, []);

    const onZoomIn = () => {
        if (zoom >= 4) 
            return;
        setZoom(zoom*2);
    }

    const onZoomOut = () => {
        if (zoom <= 1) 
            return;
        setZoom((zoom/2));
    }

    const onMouseEnter = (geo, current = { 
      positive: null, 
      recovered: null, 
      positiveIncrease: null,
      negativeIncrease: null 
    }) => {
        const stateName = geo.properties.name.toUpperCase();
        return () => {
          setTooltipContent(`
            <div class="state-distribution">
                <div class="state-title">${stateName}</div>
                <div class="state-data">
                    <div class="state-text-content">Total No of Chef</div>
                    <div class="state-value-content">${current.positiveIncrease ? current.positiveIncrease : 'NA'}</div>
                </div>
                <div class="state-data">
                    <div class="state-text-content">Total No of Foodie</div>
                    <div class="state-value-content">${current.positive ? current.positive : 'NA'}</div>
                </div>
                <div class="state-data">
                    <div class="state-text-content">Total No of Menu</div>
                    <div class="state-value-content">${current.negativeIncrease ? current.negativeIncrease : 'NA'}</div>
                </div>
                <div class="state-data">
                    <div class="state-text-content">Total No of Dish</div>
                    <div class="state-value-content">${current.recovered ? current.recovered : 'NA'}</div>
                </div>
            </div>`);
        }
    }

    const onMouseLeave = () => {
        setTooltipContent('');
    }

    const PROJECTION_CONFIG = {
        center: [-97, 40],
        scale: 420,
    }

    return (
      <>
          <ReactTooltip className="map-tooltip" 
                        arrowColor="transparent" 
                        type="light" 
                        multiline={true} 
                        html={true}
                        place="bottom">
              {tooltipContent}
          </ReactTooltip>
          <ComposableMap
              projection="geoAlbersUsa"
              width={350}
              height={200}
              projectionConfig={PROJECTION_CONFIG}
              data-tip="">
              <ZoomableGroup 
                  zoom={zoom}>
              <Geographies 
                  geography={UsaJson}
                  fill="#E0E0E0"
                  stroke="#FFFFFF"
                  strokeWidth={0.2}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                          const current = data.find(s => s.state === geo.id);
                          return (
                            <Geography 
                              key={geo.rsmKey} 
                              geography={geo} 
                              onMouseEnter={onMouseEnter(geo, current)}
                              onMouseLeave={onMouseLeave}
                              style={{
                                default: {
                                  fill: "#E0E0E0",
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#F3802A",
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#F3802A",
                                  outline: "none"
                                }
                              }}/>
                          );
                        })
                    }
              </Geographies>
              </ZoomableGroup>
          </ComposableMap>

          <MapZoomButtons handleZoomIn={onZoomIn} handleZoomOut={onZoomOut} />
      </>
    );

}
    
export default ChoroplethMap;
    