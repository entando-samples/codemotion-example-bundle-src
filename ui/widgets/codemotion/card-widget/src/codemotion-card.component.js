import React, { useEffect, useState } from 'react';
import getMetrics from './http/api';

export default function CodemotionCard(props) {
  const [metric, setMetric] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let mounted = true;
    getMetrics(props.url).then(tvJson => {
      setLoaded(true);
      if (mounted) {
        setMetric(tvJson.metric);
      }
    });
    return () => {
      mounted = false;
      setLoaded(false);
    };
  }, []);

  if (loaded) {
    return (
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Metrics test</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{metric}</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-calendar fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Local Metrics</div>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-calendar fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    );
  }
}
