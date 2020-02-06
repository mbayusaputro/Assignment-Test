import React from 'react';
import {View} from 'react-native';
import {
  CardDetail,
  ContentContext,
  CardLogin,
  ContactDetail,
  Guest,
  Price,
  styles,
} from '../components';
import {Button} from '../../../../../components';

export default () => {
  const content = React.useContext(ContentContext);

  // Main Render
  return (
    <View>
      <View>
        <CardDetail
          guest={content.guest}
          room={content.room}
          night={content.night}
          title={content.title}
          checkin={content.checkin}
          checkout={content.checkout}
        />
        <CardLogin onPress={content.onLogin} />
        <ContactDetail
          onShowContact={content.onShowContact}
          dataContact={content.dataContact}
        />
        <Guest
          totalGuest={content.totalGuest}
          onShowGuest={(item: any) => content.onShowGuest(item)}
          guest={content.guestArr}
          sameContact={content.sameContact}
          onChangeSame={content.onChangeSame}
        />
        <Price price={content.price} />
        <View style={[styles.content, styles.vertical]}>
          <Button
            content={{id: 'LANJUTKAN PEMBAYARAN', en: 'CONTINUE PAYMENT'}}
            isUpperCase
            fullWidth
            customStyle={styles.btnFooter}
            onPress={content.onBook}
          />
        </View>
        <View style={styles.vertical} />
      </View>
    </View>
  );
};
