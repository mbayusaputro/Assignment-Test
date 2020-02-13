import React from 'react';
import {View} from 'react-native';
import {
  CardDetail,
  CardLogin,
  ContactDetail,
  Guest,
  Price,
  styles,
  Context,
} from '../components';
import {Button} from '../../../../../components';

export default () => {
  const content = React.useContext(Context);

  // Main Render
  return (
    <View>
      <View>
        <CardDetail
          // date={JSON.stringify(content.dataDetail.date)}
          checkin={content.dataDetail.date.start_date}
          checkout={content.dataDetail.date.end_date}
          title={content.dataDetail.title}
          tour={content.dataDetail.tour}
        />
        <CardLogin onPress={content.onLogin} />
        <ContactDetail
          onShowContact={content.onShowContact}
          dataContact={content.dataContact}
        />
        <Guest
          totalGuest={content.totalGuest}
          onShowGuest={(item: any, type: string) =>
            content.onShowGuest(item, type)
          }
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
