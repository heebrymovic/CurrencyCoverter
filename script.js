/*await fetchJson('https://api.ipdata.co?api-key=8968b5ba90838b3cca448d2280132b99b5abe88ef68c3b30adc5d85d&fields=currency')

			let exchange = await fetchJson('https://openexchangerates.org/api/latest.json?app_id=39227dc36f8544199b700a89d09e50b8')*/

(async function(){

		async function fetchJson(url){

				let res = await fetch(url);	

				return await res.json();	
		}

		let products =  await fetchJson('data.json');

		let location = await fetchJson('https://api.ipdata.co?api-key=8968b5ba90838b3cca448d2280132b99b5abe88ef68c3b30adc5d85d&fields=currency');

		let exchange = await fetchJson('https://openexchangerates.org/api/latest.json?app_id=39227dc36f8544199b700a89d09e50b8');

			fx.base = exchange.base;
			fx.rates = exchange.rates;

			products.forEach( data => {

					let table = document.querySelector('#product-table').tBodies[0];

					let row = table.insertRow();

					nameCell = row.insertCell();

					priceCell = row.insertCell();

					convertCell = row.insertCell();

					nameCell.innerHTML = data.name;

					priceCell.innerHTML = data.Price;


					convertCell.innerHTML = location.currency.symbol + "" + fx(data.Price).from('USD').to(location.currency.code).toFixed(2) 


			})

		
})()