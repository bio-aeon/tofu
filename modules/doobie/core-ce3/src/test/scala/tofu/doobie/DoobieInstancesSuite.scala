package tofu.doobie

import org.typelevel.doobie.ConnectionIO
import tofu.lift.Lift

object DoobieInstancesSuite {

  def summonLiftConnectionIO[R, F[_]](): Any = {
    LiftConnectionIO[ConnectionIO]
    LiftConnectionIO[ConnectionCIO[F, _]]
  }

  def summonLiftToConnectionCIO[F[_]](): Any = {
    Lift[F, ConnectionCIO[F, _]]
  }

}
