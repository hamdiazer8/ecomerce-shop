import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/spinner/with-spinner.component';
const CollectionOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	state={
		loading:true
	};

	unsubscribeFormSnapshot=null;

	componentDidMount(){
		const {updateCollections}=this.pros;
		const collectionRef=firestore.collection('collection');
		collectionRef.onSnapshot(async snapshot =>{
			const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading:false})

			})
	}

	render(){
	const {match}=this.props;
	const {loading}=this.state;
	return(
	<div className='shop-page'>
		<Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading}{...props}/>}/>
		<Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLOading={loading} {...props}/>}/>
	</div>)}}
	const mapStateToProps=dispatch=>({
		updateCollections:collectionMap=>dispatch(updateCollections(collectionsMap))
	})

export default connect(null,mapStateToProps)(ShopPage);