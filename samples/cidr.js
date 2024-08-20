function cidrToIpRange(cidr) {
    const [ip, prefix] = cidr.split('/');
    const ipInt = ip.split('.').reduce((int, oct) => (int << 8) + parseInt(oct, 10), 0);
    const subnetSize = 2 ** (32 - prefix);
    const ipRange = [];
    for (let i = 0; i < subnetSize; i++) {
        const ip = ((ipInt + i) >>> 0).toString(10);
        ipRange.push([
            (ip >> 24 & 255),
            (ip >> 16 & 255),
            (ip >> 8 & 255),
            (ip & 255)
        ].join('.'));
    }
    return ipRange;
}

function countIpsInCidr(cidr) {
  const prefix = cidr.split('/')[1];
  return Math.pow(2, 32 - prefix);
}

module.exports = {
  cidrToIpRange,
  countIpsInCidr
}
