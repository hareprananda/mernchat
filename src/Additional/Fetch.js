const Fetch = async(options) => {
    return new Promise(async(resolve,reject) => {
        let {url,...rest} = options
        await fetch(url,{
            ...rest
        }).then(response => {
            resolve(response.json());
        }).catch(err => {
            reject(err);
        })
    })
}
module.exports = Fetch;