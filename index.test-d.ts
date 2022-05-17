import {expectType} from 'tsd';
import {publicIpv4, publicIpv6, CancelablePromise} from './index.js';

expectType<CancelablePromise<string>>(publicIpv4());
expectType<CancelablePromise<string>>(publicIpv4({onlyHttps: true}));
expectType<CancelablePromise<string>>(publicIpv4({timeout: 10}));
expectType<CancelablePromise<string>>(publicIpv4({fallbackUrls: ['https://ifconfig.io']}));
publicIpv4().cancel();

expectType<CancelablePromise<string>>(publicIpv6());
expectType<CancelablePromise<string>>(publicIpv6({onlyHttps: true}));
expectType<CancelablePromise<string>>(publicIpv6({timeout: 10}));
expectType<CancelablePromise<string>>(publicIpv6({fallbackUrls: ['https://ifconfig.io']}));
publicIpv6().cancel();
