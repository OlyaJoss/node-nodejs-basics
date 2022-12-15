import { env } from 'process';

const parseEnv = () => {
  
    const onlyRssPrefix = Object.entries(env).map(([key, value])=>{
        if(key.slice(0, 4) === 'RSS_') {
       const prefixRss = `${key}=${value}`;
       return prefixRss
        }
    }
    ).join('; ')
    console.log(onlyRssPrefix)
};

parseEnv();
